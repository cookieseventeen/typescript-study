import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent {
  @Input()
  selected!: string

  @Input()
  categories!: string[];

  @Output()
  selectCategory = new EventEmitter<string>();

  getBtnClass(category: string): string {
    return "btn " +
      (category === this.selected ?
        "btn-primary" : "btn-secondary");
  }
}
