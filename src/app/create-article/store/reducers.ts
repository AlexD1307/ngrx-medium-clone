import {createReducer, on, Action} from '@ngrx/store'
import {routerNavigationAction} from '@ngrx/router-store'
import { CreateArticleStateInterface } from './types/create-article-state.interface'
import { createArticleAction, createArticleFailureAction, createArticleSuccessAction } from './actions/create-article.action'

const initialState: CreateArticleStateInterface = {
  isSubmitting: false,
  validationErrors: null
}

const createArticleReducer = createReducer(
  initialState,
  on(
    createArticleAction,
    (state): CreateArticleStateInterface => ({
      ...state,
      isSubmitting: true
    })
  ),
  on(
    createArticleSuccessAction,
    (state): CreateArticleStateInterface => ({
      ...state,
      isSubmitting: false,
    })
  ),
  on(
    createArticleFailureAction,
    (state, action): CreateArticleStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors
    })
  ),
  on(routerNavigationAction, (): CreateArticleStateInterface => initialState)
)

export function reducers(state: CreateArticleStateInterface, action: Action): CreateArticleStateInterface {
  return createArticleReducer(state, action)
}
