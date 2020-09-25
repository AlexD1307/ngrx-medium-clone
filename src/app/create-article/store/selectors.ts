import { createFeatureSelector, createSelector } from '@ngrx/store'
import { AppStateInterface } from '../../shared/types/app-state.interface'
import { CreateArticleStateInterface } from './types/create-article-state.interface'

export const createArticleFeautureSelector = createFeatureSelector<
  AppStateInterface,
  CreateArticleStateInterface
>('createArticle')

export const isSubmittingSelector = createSelector(
  createArticleFeautureSelector,
  (createArticleState: CreateArticleStateInterface) => createArticleState.isSubmitting
)

export const validationErrorsSelector = createSelector(
  createArticleFeautureSelector,
  (createArticleState: CreateArticleStateInterface) => createArticleState.validationErrors
)
