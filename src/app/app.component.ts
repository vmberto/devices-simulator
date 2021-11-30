import { Component, OnInit } from '@angular/core';
import { DeviceService } from './services/device.service';
import io from "socket.io-client";
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

    this.deviceService.getAllDevices().subscribe(
      (res: any) => {
        this.devices = res.data;
      });

    this.webSocket.addedDeviceEvent.subscribe(
      eventDevice => {
        this.devices.push(eventDevice);
      });

    this.webSocket.deletedDeviceEvent.subscribe(
      (environmentDeviceId) => {
        const index = this.devices.findIndex(device => device.id === environmentDeviceId);
        this.devices.splice(index, 1);
      });

  }

}
