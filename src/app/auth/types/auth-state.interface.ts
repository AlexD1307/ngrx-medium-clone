import { CurrentUserInterface } from '../../shared/types/current-user.interface'
import { BackendErrorInterface } from '../../shared/types/backend-error.interface'

export interface AuthStateInterface {
  isSubmitting: boolean
  currentUser: CurrentUserInterface | null
  isLoading: boolean
  isLoggedIn: boolean | null
  validationErrors: BackendErrorInterface | null
}
