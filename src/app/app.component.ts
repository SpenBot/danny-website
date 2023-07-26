import { Component } from '@angular/core';

import { DeviceDetectorService } from 'ngx-device-detector';

import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  
  constructor(private deviceService: DeviceDetectorService, private appService: AppService) {
    this.appService.isMobile = this.deviceService.isMobile();
  }

}
