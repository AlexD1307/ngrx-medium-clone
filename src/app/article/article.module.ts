import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ArticleComponent } from './components/article/article.component'
import { RouterModule, Routes } from '@angular/router'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { reducers } from './store/reducers'
import { ArticleService as SharedArticleService } from '../shared/services/article.service'
import { GetArticleEffect } from './store/effects/get-article.effect'
import { LoadingModule } from '../shared/modules/loading/loading.module'
import { ErrorMessageModule } from '../shared/modules/error-message/error-message.module'
import { TagListModule } from '../shared/modules/tag-list/tag-list.module'
import { ArticleService } from './services/article.service'
import { DeleteArticleEffect } from './store/effects/delete-article.effect'

const routes: Routes = [
  {path: 'articles/:slug', component: ArticleComponent}
]

@NgModule({
  declarations: [ArticleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('article', reducers),
    EffectsModule.forFeature([GetArticleEffect, DeleteArticleEffect]),
    LoadingModule,
    ErrorMessageModule,
    TagListModule
  ],
  providers: [SharedArticleService, ArticleService]
})
export class ArticleModule {
}
