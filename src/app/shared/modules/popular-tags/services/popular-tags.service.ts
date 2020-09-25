import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { PopularTagType } from 'src/app/shared/types/popular-tag-type'
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment'
import { map } from 'rxjs/operators'
import { GetPopularTagsResponseInterface } from '../types/get-popular-tags-response.interface'

@Injectable()
export class PopularTagsService {
  constructor(private http: HttpClient) {
  }

  getPopularTags(): Observable<PopularTagType[]> {
    return this.http.get(`${environment.apiUrl}/tags`).pipe(map((response: GetPopularTagsResponseInterface) => {
      return response.tags
    }))
  }
}
