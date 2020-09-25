import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { GetArticleResponseInterface } from '../types/GetArticleResponse.interface'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment'
import { ArticleInterface } from '../types/article.interface'
import { map } from 'rxjs/operators'

@Injectable()
export class ArticleService {

  constructor(private http: HttpClient) {
  }

  getArticle(slug: string): Observable<ArticleInterface> {
    return this.http.get<GetArticleResponseInterface>(`${environment.apiUrl}/articles/${slug}`).pipe(
      map(response => response.article)
    )
  }
}
