import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, switchMap } from 'rxjs/operators'
import { of } from 'rxjs'
import { FeedService } from '../../services/feed.service'
import { getFeedAction, getFeedFailureAction, getFeedSuccessAction } from '../actions/getFeed.action'
import { GetFeedResponseInterface } from '../../types/get-feed-response.interface'

@Injectable()
export class GetFeedEffect {
  constructor(
    private actions$: Actions,
    private feedService: FeedService
  ) {}

  getFeed$ = createEffect(() => this.actions$.pipe(
    ofType(getFeedAction),
    switchMap(({url, limit, offset}) => {
      return this.feedService.getFeed(url, limit, offset).pipe(
        map((feed: GetFeedResponseInterface) =>
          getFeedSuccessAction({feed})
        ),
        catchError(() => {
          return of(getFeedFailureAction())
        })
      )
    })
  ))
}
