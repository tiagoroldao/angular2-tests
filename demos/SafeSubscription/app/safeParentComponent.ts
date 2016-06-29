import { Component } from "@angular/core";
import { PingService } from "./ping-service";
import { SafeUnsubscriber} from "./safeUnsubscriber.ts";
import { Subscription } from "rxjs/Subscription";

@Component({
    selector: "safe-parent",
    directives: [  ],
    template:
    `Safe Parent Component`
})
export class SafeParentComponent extends SafeUnsubscriber {

    constructor(private pingService: PingService) {
        super();
        this.safeSubscription(this.pingService.ping.subscribe(
            ping => console.log('Safe ping - ' + ping)
        ));
    }

    ngOnDestroy() {
        console.log('Safe parent\'s onDestroy');
    }
}