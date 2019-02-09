import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import io from "socket.io-client";
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class WebSocketService {
    private socket;
    private url = environment.API_URL;

    public addedDeviceEvent = new Subject<any>();
    public deletedDeviceEvent = new Subject<any>();

    public messageEmitter = new Subject<any>();


    constructor() {

        const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJ1bWJlcnRvYmFycm9zZkBnbWFpbC5jb20iLCJpYXQiOjE1NDk2MzE4NjJ9.gG8ZC4AIv4tzr_e8WokIL1KmTXrL9SHMriAGYFH4V60';
        this.socket = io.connect(this.url, {
            query: { token }
        });

        this.emittedEvents();
        this.receivedEvents();

    }

    private emittedEvents() {

        this.messageEmitter
            .subscribe(
                message => {
                    this.socket.emit('message-sent', message);
                });
        

    }

    private receivedEvents() {

        this.socket.on('add-device', (device) => {
            this.addedDeviceEvent.next(device);
        });

        this.socket.on('delete-device', (device) => {
            this.deletedDeviceEvent.next(device);
        });


    }




}