import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { addToFavoritesAction } from '../../store/actions/add-to-favorites'
import { Subscription } from 'rxjs'
import { isLoggedInSelector } from '../../../../../auth/store/selectors'
import { Router } from '@angular/router'

@Component({
  selector: 'app-add-to-favorites',
  templateUrl: './add-to-favorites.component.html',
})
export class AddToFavoritesComponent implements OnInit, OnDestroy {

  private isLoggedInSubscription: Subscription
  private isLoggedIn: boolean | null
  favoritesCount: number
  isFavorited: boolean

  @Input('isFavorited') isFavoritedProps: boolean
  @Input('favoritesCount') favoritesCountProps: number
  @Input('articleSlug') articleSlugProps: string

  constructor(private store: Store, private router: Router) { }

  ngOnInit(): void {
    this.initializeListeners()
    this.favoritesCount = this.favoritesCountProps
    this.isFavorited = this.isFavoritedProps
  }

  ngOnDestroy(): void {
    this.isLoggedInSubscription.unsubscribe()
  }

  private initializeListeners(): void {
    this.isLoggedInSubscription = this.store.pipe(select(isLoggedInSelector)).subscribe((isLoggedIn: boolean | null ) =>
        this.isLoggedIn = isLoggedIn
    )
  }

  handleLike(): void {
    if (!this.isLoggedIn) {
      this.router.navigateByUrl('/login')
    } else {
      this.store.dispatch(addToFavoritesAction({isFavorited: this.isFavorited, slug: this.articleSlugProps}))

      if (this.isFavorited) {
        this.favoritesCount = this.favoritesCount - 1
      } else {
        this.favoritesCount = this.favoritesCount + 1
      }

      this.isFavorited = !this.isFavorited
    }
  }
}
