import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { YourFeedComponent } from './components/your-feed/your-feed.component'
import { RouterModule, Routes } from '@angular/router'
import { FeedTogglerModule } from '../shared/modules/feed-toggler/feed-toggler.module'
import { FeedModule } from '../shared/modules/feed/feed.module'
import { PopularTagsModule } from '../shared/modules/popular-tags/popular-tags.module'
import { BannerModule } from '../shared/modules/banner/banner.module'

const routes: Routes = [
  {
    path: 'feed',
    component: YourFeedComponent
  }
]

@NgModule({
  declarations: [YourFeedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeedTogglerModule,
    FeedModule,
    PopularTagsModule,
    BannerModule,
  ]
})
export class YourFeedModule {
}
