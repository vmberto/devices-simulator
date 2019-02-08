import { Component, OnInit, Input, OnDestroy, HostListener } from '@angular/core';
import io from "socket.io-client";
import { environment } from 'src/environments/environment';
import { DeviceMessage, DeviceSignal } from './message.interface';
import { WebSocketService } from 'src/app/services/websocket.service';


@Component({
  selector: 'app-salvus-devices',
  templateUrl: './salvus-devices.component.html',
  styleUrls: ['./salvus-devices.component.css']

})
export class SalvusDevicesComponent implements OnInit {

  private deviceMessage: DeviceMessage;
  private deviceSignal: DeviceSignal;

  @Input() device: any;
  @HostListener('window:beforeunload', ['$event'])
  beforeUnloadHander(event) {
    this.deviceSignal.status = false;
    this.webSocket.statusSignalEmitter.next(this.deviceSignal);
  }

  constructor(private webSocket: WebSocketService) { }

  ngOnInit() {

    this.deviceMessage = {
      temperature: 0,
      deviceId: this.device.id,
      createdAt: new Date()
    };

    this.deviceSignal = {
      status: true,
      deviceId: this.device.id
    };

    this.webSocket.statusSignalEmitter.next(this.deviceSignal);

    setInterval(() => {
      this.emit();
    }, 20000);

  }


  private emit(): void {
    this.deviceMessage.temperature = Math.ceil(Math.random() * (30 - 15) + 15);

    this.webSocket.messageEmitter.next(this.deviceMessage);
  }

}
