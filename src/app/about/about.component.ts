import { Component, OnInit } from '@angular/core';

import { AppService } from '../app.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public isMobile = false;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.isMobile = this.appService.isMobile;
  }

}
