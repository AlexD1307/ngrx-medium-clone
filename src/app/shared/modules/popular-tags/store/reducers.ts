import { PopularTagsStateInterface } from '../types/popular-tags-state.interface'
import { Action, createReducer, on } from '@ngrx/store'
import { getPopularTagsAction, getPopularTagsSyccessAction } from './actions/get-popular-tags'

const initialState: PopularTagsStateInterface = {
  data: null,
  isLoading: false,
  error: null
}

const popularTagsReducer = createReducer(
  initialState,
  on(
    getPopularTagsAction,
    (state): PopularTagsStateInterface => ({
      ...state,
      isLoading: true
    })
  ),
  on(
    getPopularTagsSyccessAction,
    (state, action): PopularTagsStateInterface => ({
      ...state,
      isLoading: false,
      data: action.popularTags
    })
  ),
  on(
    getPopularTagsAction,
    (state): PopularTagsStateInterface => ({
      ...state,
      isLoading: false,
    })
  )
)

export function reducers(state: PopularTagsStateInterface, action: Action) {
  return popularTagsReducer(state, action)
}
