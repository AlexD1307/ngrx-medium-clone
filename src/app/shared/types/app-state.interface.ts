import { AuthStateInterface } from '../../auth/types/auth-state.interface'
import { FeedStateInterface } from '../modules/feed/types/feed-state.interface'
import { PopularTagsStateInterface } from '../modules/popular-tags/types/popular-tags-state.interface'
import { ArticleStateInterface } from '../../article/types/articleState.interface'
import { CreateArticleStateInterface } from '../../create-article/store/types/create-article-state.interface'
import { EditArticleStateInterface } from '../../edit-article/types/edit-article-state.interface'
import { UserProfileStateInterface } from '../../user-profile/types/user-profile-state.interface'
import { SettingsStateInterface } from '../../settings/store/types/setting-state.interface'

export interface AppStateInterface {
  auth: AuthStateInterface,
  feed: FeedStateInterface,
  popularTags: PopularTagsStateInterface,
  article: ArticleStateInterface
  createArticle: CreateArticleStateInterface,
  editArticle: EditArticleStateInterface,
  userProfile: UserProfileStateInterface,
  settings: SettingsStateInterface
}
