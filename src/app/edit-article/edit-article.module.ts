import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {ArticleFormModule} from 'src/app/shared/modules/article-form/article-form.module'
import {EffectsModule} from '@ngrx/effects'
import {StoreModule} from '@ngrx/store'
import {reducers} from 'src/app/edit-article/store/reducers'
import {EditArticleComponent} from './components/edit-article/edit-article.component'
import {UpdateArticleEffect} from './store/effects/update-article.effect'
import {GetArticleEffect} from './store/effects/get-article.effect'
import {EditArticleService} from 'src/app/edit-article/services/edit-article.service'
import {ArticleService as SharedArticleService} from 'src/app/shared/services/article.service'
import {LoadingModule} from '../shared/modules/loading/loading.module'
import { BackendErrorMessagesModule } from '../shared/modules/backend-error-messages/backend-error-messages.module'

const routes = [
  {
    path: 'articles/:slug/edit',
    component: EditArticleComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ArticleFormModule,
    EffectsModule.forFeature([UpdateArticleEffect, GetArticleEffect]),
    StoreModule.forFeature('editArticle', reducers),
    LoadingModule,
    BackendErrorMessagesModule
  ],
  declarations: [EditArticleComponent],
  providers: [EditArticleService, SharedArticleService]
})
export class EditArticleModule {}
