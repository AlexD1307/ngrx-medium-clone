import { BackendErrorInterface } from '../../../shared/types/backend-error.interface'

export interface CreateArticleStateInterface {
  isSubmitting: boolean
  validationErrors: BackendErrorInterface | null
}
