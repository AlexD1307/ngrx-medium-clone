import { ProfileInterface } from './profile.interface'

export interface ArticleInterface {
  author: ProfileInterface
  body: string
  title: string
  createdAt: string
  description: string
  favorited: boolean
  favouritesCount: number
  slug: string
  tagList: string[]
  updatedAt: string
}
