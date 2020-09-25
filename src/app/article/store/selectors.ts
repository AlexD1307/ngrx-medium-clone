import { createFeatureSelector, createSelector } from '@ngrx/store'
import { AppStateInterface } from '../../shared/types/app-state.interface'
import { ArticleStateInterface } from '../types/articleState.interface'

export const authFeatureSelector = createFeatureSelector<
  AppStateInterface,
  ArticleStateInterface
  >('article')

export const isLoadingSelector = createSelector(
  authFeatureSelector,
  (articleState: ArticleStateInterface) => articleState.isLoading
)

export const errorSelector = createSelector(
  authFeatureSelector,
  (articleState: ArticleStateInterface) => articleState.error
)

export const articleSelector = createSelector(
  authFeatureSelector,
  (articleState: ArticleStateInterface) => articleState.data
)
