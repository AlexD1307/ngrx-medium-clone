import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Observable } from 'rxjs'
import { BackendErrorInterface } from '../../../shared/types/backend-error.interface'
import { select, Store } from '@ngrx/store'
import { isSubmittingSelector, validationErrorsSelector } from '../../store/selectors'
import { loginAction } from '../../store/actions/login.action'
import { LoginRequestInterface } from '../../types/login-request.interface'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup
  isSubmitting$: Observable<boolean>
  backendErrors$: Observable<BackendErrorInterface | null>

  constructor(private fb: FormBuilder, private store: Store) {
  }

  ngOnInit(): void {
    this.initializeForm()
    this.initializeValues()
  }

  private initializeForm(): void {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit(): void {
    const request: LoginRequestInterface = {
      user: this.form.value
    }
    this.store.dispatch(loginAction({request}))
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
  }
}
