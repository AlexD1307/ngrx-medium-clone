import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, switchMap } from 'rxjs/operators'
import { of } from 'rxjs'
import { addToFavoritesAction, addToFavoritesFailureAction, addToFavoritesSuccessAction } from '../actions/add-to-favorites'
import { AddToFavoritesService } from '../../services/add-to-favorites.service'
import { ArticleInterface } from '../../../../types/article.interface'

@Injectable()
export class AddToFavoritesEffect {
  constructor(
    private actions$: Actions,
    private addToFavoritesService: AddToFavoritesService
  ) {
  }

  addToFavorites$ = createEffect(() => this.actions$.pipe(
    ofType(addToFavoritesAction),
    switchMap(({isFavorited, slug}) => {
      const article$ = isFavorited ?
        this.addToFavoritesService.removeFromFavorites(slug) :
        this.addToFavoritesService.addToFavorites(slug)

      return article$.pipe(
        map((article: ArticleInterface) =>
          addToFavoritesSuccessAction({article})
        ),
        catchError(() => {
          return of(addToFavoritesFailureAction())
        })
    )
    })
  ))
}
