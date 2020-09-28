import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, switchMap } from 'rxjs/operators'
import { of } from 'rxjs'
import { UserProfileService } from '../../services/user-profile.service'
import { getUserProfileAction, getUserProfileFailureAction, getUserProfileSuccessAction } from '../actions/get-user-profile.action'
import { ProfileInterface } from '../../../shared/types/profile.interface'

@Injectable()
export class GetUserProfileEffect {
  constructor(
    private actions$: Actions,
    private userProfile: UserProfileService
  ) {}

  getUserProfile$ = createEffect(() => this.actions$.pipe(
    ofType(getUserProfileAction),
    switchMap(({slug}) => {
      return this.userProfile.getUserProfile(slug).pipe(
        map((userProfile: ProfileInterface) => getUserProfileSuccessAction({userProfile})),
        catchError(() => of(getUserProfileFailureAction()))
      )
    })
  ))
}
