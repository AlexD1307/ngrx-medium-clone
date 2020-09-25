import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core'
import { ArticleInputInterface } from 'src/app/shared/types/article-input.interface'
import { BackendErrorInterface } from 'src/app/shared/types/backend-error.interface'
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
})
export class ArticleFormComponent implements OnInit {
  form: FormGroup
  @Input('initialValues') initialValuesProps: ArticleInputInterface
  @Input('isSubmitting') isSubmittingProps: boolean
  @Input('errors') errorProps: BackendErrorInterface | null
  @Output('articleSubmit') articleSubmitEvent = new EventEmitter<ArticleInputInterface>()

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    console.log(this.initialValuesProps)
    this.initializeForm()
  }

  private initializeForm(): void {
    this.form = this.fb.group({
      title: this.initialValuesProps.title,
      description: this.initialValuesProps.description,
      body: this.initialValuesProps.body,
      tagList: this.initialValuesProps.tagList.join(' ')
    })
  }

  onSubmit(): void {
    this.articleSubmitEvent.emit(this.form.value)
  }
}
