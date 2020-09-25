import { Component, Input, OnInit } from '@angular/core'
import { PopularTagType } from 'src/app/shared/types/popular-tag-type'

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
})
export class TagListComponent implements OnInit {
  @Input('tags') tagsProps: PopularTagType[]
  constructor() { }

  ngOnInit(): void {
  }

}
