import { UserProfileStateInterface } from '../types/user-profile-state.interface'
import { createReducer, on } from '@ngrx/store'
import { getUserProfileAction, getUserProfileFailureAction, getUserProfileSuccessAction } from './actions/get-user-profile.action'

const initailState: UserProfileStateInterface = {
  isLoading: false,
  error: null,
  data: null
}

const userProfileReducer = createReducer(
  initailState,
  on(getUserProfileAction, (state): UserProfileStateInterface => ({
    ...state,
    isLoading: true
  })),
  on(getUserProfileSuccessAction, (state, action): UserProfileStateInterface => ({
    ...state,
    isLoading: false,
    data: action.userProfile
  })),
  on(getUserProfileFailureAction, (state): UserProfileStateInterface => ({
    ...state,
    isLoading: false,
  }))
)

export function reducers(state: UserProfileStateInterface, action): UserProfileStateInterface {
  return userProfileReducer(state, action)
}
