import { Component, OnInit, Input } from '@angular/core';
import io from "socket.io-client";
import { environment } from 'src/environments/environment';
import { DeviceMessage } from './message.interface';


@Component({
  selector: 'app-salvus-devices',
  templateUrl: './salvus-devices.component.html',
  styleUrls: ['./salvus-devices.component.css']
})
export class SalvusDevicesComponent implements OnInit {

  @Input() device: any;

  private url = environment.API_URL;
  private socket;

  private deviceMessage: DeviceMessage;

  constructor() {


    
  }

  ngOnInit() {

    this.deviceMessage = {
      temperature: 0,
      deviceId: this.device.id,
      createdAt: new Date()
    }
    
    this.socket = io.connect(this.url);

    this.emit();
    setInterval(() => {
      this.emit();
    }, 5000);

  }

  private emit(): void {
    this.deviceMessage.temperature = Math.ceil(Math.random() * (30 - 15) + 15);
    this.socket.emit('message-sent', this.deviceMessage);
  }

}
