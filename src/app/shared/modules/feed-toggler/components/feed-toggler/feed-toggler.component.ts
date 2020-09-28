import { Component, Input, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { select, Store } from '@ngrx/store'
import { isLoggedInSelector } from 'src/app/auth/store/selectors'

@Component({
  selector: 'app-feed-toggler',
  templateUrl: './feed-toggler.component.html',
})
export class FeedTogglerComponent implements OnInit {
  @Input('tagName') tagNameProps: string | null
  isLoggedIn$: Observable<boolean | null>
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.initializeValue()
  }

  private initializeValue(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector))
  }
}
