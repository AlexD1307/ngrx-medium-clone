import {BackendErrorInterface} from 'src/app/shared/types/backend-error.interface'
import {ArticleInterface} from 'src/app/shared/types/article.interface'

export interface EditArticleStateInterface {
  article: ArticleInterface | null
  isLoading: boolean
  isSubmitting: boolean
  validationErrors: BackendErrorInterface | null
}
