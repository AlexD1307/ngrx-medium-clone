import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { getFeedAction } from '../../store/actions/getFeed.action'
import { Observable } from 'rxjs'
import { GetFeedResponseInterface } from '../../types/get-feed-response.interface'
import { errorSelector, feedSelector, isLoadingSelector } from '../../store/selectors'
import { environment } from 'src/environments/environment'
import { ActivatedRoute, Params, Router } from '@angular/router'

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit, OnChanges {
  @Input('apiUrl') apiUrlProps: string
  isLoading$: Observable<boolean>
  error$: Observable<string | null>
  feed$: Observable<GetFeedResponseInterface | null>
  limit = environment.limit
  baseUrl: string
  currentPage: number

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initializeValues()
    this.initializeListeners()
  }

  ngOnChanges(changes: SimpleChanges): void {
    const isApiUrlChanged = !changes.apiUrlProps.firstChange
      && changes.apiUrlProps.currentValue !== changes.apiUrlProps.previousValue
    if (isApiUrlChanged) {
      this.fetchFeed()
    }
  }

  private initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.feed$ = this.store.pipe(select(feedSelector))
    this.baseUrl = this.router.url.split('?')[0]
  }

  private initializeListeners(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.currentPage = Number(params.page || '1')
      this.fetchFeed()
    })
  }

  private fetchFeed(): void {
    const offset = this.currentPage * this.limit - this.limit
    this.store.dispatch(getFeedAction({url: this.apiUrlProps, limit: this.limit, offset}))
  }
}
