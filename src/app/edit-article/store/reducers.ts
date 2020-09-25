import {createReducer, on, Action} from '@ngrx/store'
import {EditArticleStateInterface} from 'src/app/edit-article/types/edit-article-state.interface'
import {
  updateArticleAction,
  updateArticleSuccessAction,
  updateArticleFailureAction
} from 'src/app/edit-article/store/actions/update-article.action'
import {
  getArticleAction,
  getArticleSuccessAction,
  getArticleFailureAction
} from 'src/app/edit-article/store/actions/get-article.action'

const initialState: EditArticleStateInterface = {
  isLoading: false,
  article: null,
  isSubmitting: false,
  validationErrors: null
}

const editArticleReducer = createReducer(
  initialState,
  on(
    updateArticleAction,
    (state): EditArticleStateInterface => ({
      ...state,
      isSubmitting: true
    })
  ),
  on(
    updateArticleSuccessAction,
    (state): EditArticleStateInterface => ({
      ...state,
      isSubmitting: false
    })
  ),
  on(
    updateArticleFailureAction,
    (state, action): EditArticleStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors
    })
  ),
  on(
    getArticleAction,
    (state): EditArticleStateInterface => ({
      ...state,
      isLoading: true
    })
  ),
  on(
    getArticleSuccessAction,
    (state, action): EditArticleStateInterface => ({
      ...state,
      isLoading: false,
      article: action.article
    })
  ),
  on(
    getArticleFailureAction,
    (state): EditArticleStateInterface => ({
      ...state,
      isLoading: false
    })
  )
)

export function reducers(state: EditArticleStateInterface, action: Action): EditArticleStateInterface {
  return editArticleReducer(state, action)
}
