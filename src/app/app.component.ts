import { Component, OnInit } from '@angular/core';
import { DeviceService } from './services/device.service';
import io from "socket.io-client";
import { environment } from 'src/environments/environment';
import { WebSocketService } from './services/websocket.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public devices: any[];


  constructor(
    private deviceService: DeviceService,
    private webSocket: WebSocketService
  ) {

  }

  ngOnInit() {

    this.deviceService.getAllDevices()
      .subscribe((res: any) => {
        this.devices = res.data;
      });

    this.webSocket.deviceEvent
      .subscribe(device => {
        this.devices.push(device);
      });

  }



}
