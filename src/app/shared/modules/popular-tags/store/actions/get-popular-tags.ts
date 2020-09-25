import { createAction, props } from '@ngrx/store'
import { ActionTypes } from '../action-types'
import { PopularTagType } from 'src/app/shared/types/popular-tag-type'

export const getPopularTagsAction = createAction(ActionTypes.GET_POPULAR_TAGS)

export const getPopularTagsSyccessAction = createAction(
  ActionTypes.GET_POPULAR_TAGS_SUCCESS,
  props<{popularTags: PopularTagType[]}>()
)

export const getPopularTagsFailureAction = createAction(ActionTypes.GET_POPULAR_TAGS_FAILURE)
