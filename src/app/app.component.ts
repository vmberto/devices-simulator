import { Component, OnInit } from '@angular/core';
import { DeviceService } from './services/device.service';
import { isMaster } from 'cluster';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public devices: any[];
  
  constructor(private deviceService: DeviceService) {
  }

  ngOnInit() {

    this.deviceService.getAllDevices()
      .subscribe((res: any) => {
        this.devices = res.data;
      });


  }



}
