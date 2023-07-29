import { Component, OnInit } from '@angular/core';

import { AppService } from '../app.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  public isMobile = false;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.isMobile = this.appService.isMobile;
  }

}
