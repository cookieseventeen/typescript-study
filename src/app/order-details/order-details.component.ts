import { Component } from '@angular/core';
import { DataSource } from '../data/dataSource';
import { Router } from '@angular/router';
import { Order } from '../data/entities';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent {
  constructor(private dataSource: DataSource, private router: Router) { }

  get order(): Order {
    return this.dataSource.order;
  }

  submit() {
    this.dataSource.storeOrder().subscribe(id =>
      this.router.navigateByUrl(`/summary/${id}`));
  }
}
