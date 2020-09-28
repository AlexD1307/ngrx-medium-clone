import { Component, OnDestroy, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { FormBuilder, FormGroup } from '@angular/forms'
import { CurrentUserInterface } from '../../../shared/types/current-user.interface'
import { Observable, Subscription } from 'rxjs'
import { currentUserSelector } from '../../../auth/store/selectors'
import { filter } from 'rxjs/operators'
import { BackendErrorInterface } from '../../../shared/types/backend-error.interface'
import { isSubmittingSelector, validationErrorsSelector } from '../../store/selectors'
import { updateCurrentUserAction } from '../../../auth/store/actions/update-current-user.action'
import { logoutAction } from '../../../auth/store/actions/sync.action'

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
})
export class SettingsComponent implements OnInit, OnDestroy {
  private currentUserSubscription: Subscription
  form: FormGroup
  currentUser: CurrentUserInterface
  isSubmitting$: Observable<boolean>
  backendError$: Observable<BackendErrorInterface | null>

  constructor(private store: Store, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializeValues()
    this.initializeListeners()
  }

  ngOnDestroy(): void {
    this.currentUserSubscription.unsubscribe()
  }


  private initializeListeners(): void {
    this.currentUserSubscription = this.store.pipe(
      select(currentUserSelector),
      filter(Boolean)
    ).subscribe((currentUser: CurrentUserInterface) => {
      this.currentUser = currentUser
      this.initializeForm()
    })
  }

  private initializeForm(): void {
    this.form = this.fb.group({
      image: this.currentUser.image,
      username: this.currentUser.username,
      bio: this.currentUser.bio,
      email: this.currentUser.email,
      password: ''
    })
  }

  private initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.backendError$ = this.store.pipe(select(validationErrorsSelector))
  }

  onSubmit(): void {
    const currentUserInput = {...this.currentUser, ...this.form.value}
    this.store.dispatch(updateCurrentUserAction({currentUserInput}))
  }

  logout(): void {
    this.store.dispatch(logoutAction())
  }
}
