import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store'
import { EffectsModule } from '@ngrx/effects'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AuthModule } from 'src/app/auth/auth.module'
import { environment } from 'src/environments/environment'
import { TopBarModule } from 'src/app/shared/modules/top-bar/top-bar.module'
import { PersistenceService } from './shared/services/persistence.service'
import { AuthInterceptor } from './shared/services/auth-interceptor.service'
import { GlobalFeedModule } from './global-feed/global-feed.module'
import { YourFeedModule } from './your-feed/your-feed.module'
import { TagFeedModule } from './tag-feed/tag-feed.module'
import { ArticleModule } from './article/article.module'
import { CreateArticleModule } from './create-article/create-article.module'
import { EditArticleModule } from './edit-article/edit-article.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule,
    StoreModule.forRoot({router: routerReducer}),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot([]),
    TopBarModule,
    GlobalFeedModule,
    YourFeedModule,
    TagFeedModule,
    EditArticleModule,
    CreateArticleModule,
    ArticleModule,
  ],
  providers: [
    PersistenceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
