import { Component, OnDestroy, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { combineLatest, Observable, Subscription } from 'rxjs'
import { errorSelector, articleSelector, isLoadingSelector } from 'src/app/article/store/selectors'
import { ArticleInterface } from '../../../shared/types/article.interface'
import { getArticleAction } from '../../store/actions/get-article.action'
import { ActivatedRoute } from '@angular/router'
import { map, take } from 'rxjs/operators'
import { currentUserSelector } from '../../../auth/store/selectors'
import { CurrentUserInterface } from '../../../shared/types/current-user.interface'
import { deleteArticleAction } from '../../store/actions/delete-article'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit, OnDestroy {
  private slug: string
  private articleSubscription: Subscription
  article: ArticleInterface | null
  isLoading$: Observable<boolean>
  error$: Observable<string | null>
  feed$: Observable<ArticleInterface | null>
  isAuthor$: Observable<boolean>

  constructor(private store: Store, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.initializeValues()
    this.initializeListeners()
    this.fetchData()
  }

  ngOnDestroy(): void {
    this.articleSubscription.unsubscribe()
  }

  private initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.feed$ = this.store.pipe(select(articleSelector))
    this.slug = this.route.snapshot.paramMap.get('slug')
    this.isAuthor$ = combineLatest(
      this.store.pipe(select(articleSelector)),
      this.store.pipe(select(currentUserSelector))
    ).pipe(map(([article, currentUser]: [ArticleInterface | null, CurrentUserInterface | null]) => {
      if (!article || !currentUser) {
        return false
      }
      return article.author.username === currentUser.username
    }))

  }

  private fetchData(): void {
    this.store.dispatch(getArticleAction({slug: this.slug}))
  }

  private initializeListeners(): void {
    this.articleSubscription = this.store.pipe(
      select(articleSelector)
    ).subscribe((article: ArticleInterface | null) => this.article = article)
  }

  deleteArticle(): void {
    this.store.dispatch(deleteArticleAction({slug: this.slug}))
  }
}
