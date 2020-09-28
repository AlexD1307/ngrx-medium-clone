import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FeedComponent } from './components/feed/feed.component'
import { FeedService } from './services/feed.service'
import { EffectsModule } from '@ngrx/effects'
import { GetFeedEffect } from './store/effects/get-feed.effect'
import { StoreModule } from '@ngrx/store'
import { reducers } from './store/reducers'
import { RouterModule } from '@angular/router'
import { ErrorMessageModule } from '../error-message/error-message.module'
import { LoadingModule } from '../loading/loading.module'
import { PaginationModule } from '../pagination/pagination.module'
import { TagListModule } from '../tag-list/tag-list.module'
import { AddToFavoritesModule } from '../add-to-favorites/add-to-favorites.module'

@NgModule({
  declarations: [FeedComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature('feed', reducers),
    RouterModule,
    ErrorMessageModule,
    LoadingModule,
    PaginationModule,
    TagListModule,
    AddToFavoritesModule
  ],
  providers: [FeedService],
  exports: [FeedComponent]
})
export class FeedModule {
}
