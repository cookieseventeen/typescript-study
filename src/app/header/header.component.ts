import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Order } from '../data/entities';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input()
  order!: Order;

  @Output()
  submit = new EventEmitter<void>();

  get headerText(): string {
    let count = this.order.productCount;
    return count === 0 ? "(No Selection)"
      : `${count} product(s), $${this.order.total.toFixed(2)}`
  }
}
