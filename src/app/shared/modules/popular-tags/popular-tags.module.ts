import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PopularTagsComponent } from './components/popular-tags/popular-tags.component'
import { PopularTagsService } from './services/popular-tags.service'
import { StoreModule } from '@ngrx/store'
import { reducers } from './store/reducers'
import { EffectsModule } from '@ngrx/effects'
import { GetPopularTagsEffect } from './store/effects/get=popular-tags.effect'
import { LoadingModule } from '../loading/loading.module'
import { ErrorMessageModule } from '../error-message/error-message.module'
import { RouterModule } from '@angular/router'


@NgModule({
  declarations: [PopularTagsComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('popularTags', reducers),
    EffectsModule.forFeature([GetPopularTagsEffect]),
    LoadingModule,
    ErrorMessageModule,
    RouterModule
  ],
  providers: [PopularTagsService],
  exports: [PopularTagsComponent]
})
export class PopularTagsModule {
}
