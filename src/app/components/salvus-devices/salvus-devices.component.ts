import { Component, OnInit, Input, OnDestroy, HostListener } from '@angular/core';
import io from "socket.io-client";
import { environment } from 'src/environments/environment';
import { DeviceMessage } from './message.interface';
import { WebSocketService } from 'src/app/services/websocket.service';


@Component({
  selector: 'app-salvus-devices',
  templateUrl: './salvus-devices.component.html',
  styleUrls: ['./salvus-devices.component.css']

})
export class SalvusDevicesComponent implements OnInit {

  public dashboardUrl: string = environment.DASHBOARD_URL;
  private deviceMessage: DeviceMessage;

  @Input() device: any;

  constructor(private webSocket: WebSocketService) { }

  ngOnInit() {

    let temperature = 0;
    if (this.device.messages && this.device.messages[0]) {
      temperature = this.device.messages[0].temperature;
    }

    this.deviceMessage = {
      temperature,
      deviceId: this.device.id,
      createdAt: new Date()
    };
    

    setInterval(() => {
      this.emit();
    }, 20000);

  }


  private emit(): void {

    this.deviceMessage = {
      temperature: Math.ceil(Math.random() * (30 - 15) + 15),
      deviceId: this.device.id,
      createdAt: new Date()
    };

    this.webSocket.messageEmitter.next(this.deviceMessage);
  }


  public getUrl() {
    return `${this.dashboardUrl}/home/clients/show/${this.device.environment.clientId}`
  }

}

