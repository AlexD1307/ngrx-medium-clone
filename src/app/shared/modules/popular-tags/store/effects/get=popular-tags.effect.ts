import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, switchMap } from 'rxjs/operators'
import { of } from 'rxjs'
import { PopularTagsService } from '../../services/popular-tags.service'
import { getPopularTagsAction, getPopularTagsFailureAction, getPopularTagsSyccessAction } from '../actions/get-popular-tags'
import { PopularTagType } from '../../../../types/popular-tag-type'

@Injectable()
export class GetPopularTagsEffect {
  constructor(
    private actions$: Actions,
    private popularTag: PopularTagsService
  ) {
  }

  getPopularTags$ = createEffect(() => this.actions$.pipe(
    ofType(getPopularTagsAction),
    switchMap(() => {
      return this.popularTag.getPopularTags().pipe(
        map((popularTags: PopularTagType[]) =>
          getPopularTagsSyccessAction({popularTags})
        ),
        catchError(() => {
          return of(getPopularTagsFailureAction())
        })
      )
    })
  ))
}
