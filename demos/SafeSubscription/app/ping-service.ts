import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/timer";

@Injectable()
export class PingService {
    public ping: Observable<Number>; 

    constructor() {
        this.ping = Observable.timer(0, 1000);
    }
}