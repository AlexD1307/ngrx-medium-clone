import { BackendErrorInterface } from '../../../shared/types/backend-error.interface'

export interface SettingsStateInterface {
  isSubmitting: boolean
  validationErrors: BackendErrorInterface | null
}
