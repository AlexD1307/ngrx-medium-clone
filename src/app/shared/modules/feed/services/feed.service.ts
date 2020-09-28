import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { GetFeedResponseInterface } from '../types/get-feed-response.interface'
import { HttpClient, HttpParams } from '@angular/common/http'
import { environment } from '../../../../../environments/environment'

@Injectable()
export class FeedService {
  constructor(private http: HttpClient) {
  }

  getFeed(url: string, limit, offset): Observable<GetFeedResponseInterface> {
    const params = new HttpParams()
      .set('limit', limit)
      .set('offset', offset)

    return this.http.get<GetFeedResponseInterface>(environment.apiUrl + url, {params})
  }
}
