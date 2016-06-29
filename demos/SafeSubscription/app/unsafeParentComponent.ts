import { Component, OnDestroy } from "@angular/core";
import { PingService } from "./ping-service";
import { SafeUnsubscriber} from "./safeUnsubscriber.ts";
import { Subscription } from "rxjs/Subscription";

@Component({
    selector: "unsafe-parent",
    directives: [  ],
    template:
    `Unsafe Parent Component`
})
export class UnsafeParentComponent implements OnDestroy {

    constructor(private pingService: PingService) {
        this.pingService.ping.subscribe(
            ping => console.log('Unsafe ping - ' + ping)
        );
    }

    ngOnDestroy() {
        console.log('Unsafe parent\'s onDestroy');
    }
}