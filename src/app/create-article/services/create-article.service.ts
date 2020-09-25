import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ArticleInputInterface } from '../../shared/types/article-input.interface'
import { Observable } from 'rxjs'
import { environment } from '../../../environments/environment'
import { map } from 'rxjs/operators'
import { SaveArticleResponseInterface } from '../../shared/types/saveArticleResponse.interface'

@Injectable()
export class CreateArticleService {

  constructor(private http: HttpClient) { }

  createArticle(articleInput: ArticleInputInterface) : Observable<ArticleInputInterface> {
    return this.http.post(`${environment.apiUrl}/articles`, articleInput).pipe(
      map((response: SaveArticleResponseInterface) => response.article)
    )
  }
}
