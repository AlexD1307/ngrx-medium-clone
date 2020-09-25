import { createAction, props } from '@ngrx/store'
import { ActionTypes } from '../action-types'
import { LoginRequestInterface } from '../../types/login-request.interface'
import { CurrentUserInterface } from '../../../shared/types/current-user.interface'
import { BackendErrorInterface } from '../../../shared/types/backend-error.interface'

export const loginAction = createAction(
  ActionTypes.LOGIN,
  props<{request: LoginRequestInterface}>()
)

export const loginSuccessAction = createAction(
  ActionTypes.LOGIN_SUCCESS,
  props<{currentUser: CurrentUserInterface}>()
)

export const loginFailureAction = createAction(
  ActionTypes.LOGIN_FAILURE,
  props<{errors: BackendErrorInterface}>()

)
