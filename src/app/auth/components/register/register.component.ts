import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { select, Store } from '@ngrx/store'
import { registerAction } from '../../store/actions/register.action'
import { Observable } from 'rxjs'
import { isSubmittingSelector, validationErrorsSelector } from '../../store/selectors'
import { RegisterRequestInterface } from '../../types/register-request.interface'
import { BackendErrorInterface } from 'src/app/shared/types/backend-error.interface'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
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
      username: ['', Validators.required],
      email: '',
      password: ''
    })
  }

  onSubmit(): void {
    const request: RegisterRequestInterface = {
      user: this.form.value
    }
    this.store.dispatch(registerAction({request}))
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
  }
}
