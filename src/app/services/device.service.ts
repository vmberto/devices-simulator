import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class DeviceService {

    constructor(public http: HttpClient) {
    }

    public getAllDevices() {
        let headers = new HttpHeaders();
        headers = headers.set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJ1bWJlcnRvYmFycm9zZkBnbWFpbC5jb20iLCJpYXQiOjE1NDk0MTk3NjF9.rcQ_-XwQPDoMVotI5hMhEnyEKU7-Nup77Nb065hj4Ng');

        return this.http.get(`${environment.API_URL}/api/devices`, { headers });
    }

}
