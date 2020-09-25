import { PopularTagType } from '../../../types/popular-tag-type'

export interface PopularTagsStateInterface {
  data: PopularTagType[] | null
  isLoading: boolean
  error: string | null
}
