import { Component, OnInit } from '@angular/core';

import { AppService } from '../app.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public isMobile = false;

  constructor(private appService: AppService) {
  }

  ngOnInit(): void {
    this.isMobile = this.appService.isMobile;
  }

}
