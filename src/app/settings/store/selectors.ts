import { createFeatureSelector, createSelector } from '@ngrx/store'
import { AppStateInterface } from '../../shared/types/app-state.interface'
import { SettingsStateInterface } from './types/setting-state.interface'

export const settingFeatureSelector = createFeatureSelector<
  AppStateInterface,
  SettingsStateInterface
>('settings')

export const isSubmittingSelector = createSelector(
  settingFeatureSelector,
  (settingState: SettingsStateInterface) => settingState.isSubmitting
)

export const validationErrorsSelector = createSelector(
  settingFeatureSelector,
  (settingState: SettingsStateInterface) => settingState.validationErrors
)
