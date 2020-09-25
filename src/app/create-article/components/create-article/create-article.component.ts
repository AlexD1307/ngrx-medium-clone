import { Component, OnInit } from '@angular/core'
import { ArticleInputInterface } from '../../../shared/types/article-input.interface'
import { Observable } from 'rxjs'
import { BackendErrorInterface } from '../../../shared/types/backend-error.interface'
import { select, Store } from '@ngrx/store'
import { isSubmittingSelector, validationErrorsSelector } from '../../store/selectors'
import { createArticleAction } from '../../store/actions/create-article.action'

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
})
export class CreateArticleComponent implements OnInit {
  initialValues: ArticleInputInterface = {
    title: '',
    description: '',
    body: '',
    tagList: []
  }
  isSubmitting$: Observable<boolean>
  validationError$: Observable<BackendErrorInterface | null>

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.validationError$ = this.store.pipe(select(validationErrorsSelector))
  }

  onSubmit(articleInput: ArticleInputInterface): void {
    this.store.dispatch(createArticleAction({articleInput}))
  }
}
