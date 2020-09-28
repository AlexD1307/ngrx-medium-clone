import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { ArticleInterface } from '../../../types/article.interface'
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment'
import { map } from 'rxjs/operators'
import { GetArticleResponseInterface } from '../../../types/GetArticleResponse.interface'

@Injectable()
export class AddToFavoritesService {
  constructor(private http: HttpClient) {}

  getArticle(response: GetArticleResponseInterface): ArticleInterface {
    return response.article
  }

  addToFavorites(slug: string): Observable<ArticleInterface> {
    return this.http.post(`${environment.apiUrl}/articles/${slug}/favorite`, {}).pipe(map(this.getArticle))
  }

  removeFromFavorites(slug: string): Observable<ArticleInterface> {
    return this.http.delete(`${environment.apiUrl}/articles/${slug}/favorite`).pipe(map(this.getArticle))
  }
}
