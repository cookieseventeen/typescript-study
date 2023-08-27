import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent {
  constructor(private activatedRoute: ActivatedRoute) { }

  get id(): string {
    return this.activatedRoute.snapshot.params["id"];
  }

}
