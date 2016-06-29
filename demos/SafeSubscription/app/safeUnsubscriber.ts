import { OnDestroy } from "@angular/core";
import { Subscription } from "rxjs/Subscription";

export class SafeUnsubscriber implements OnDestroy {
    private subscriptions: Subscription[] = [];

    constructor() {
        let func = this.ngOnDestroy;

        this.ngOnDestroy = () => {
            func();
            this.unsubscribeAll();
        };
    }

    protected safeSubscription (sub: Subscription): Subscription {
        this.subscriptions.push(sub);
        return sub;
    }

    private unsubscribeAll() {
        this.subscriptions.forEach(element => {
            !element.isUnsubscribed && element.unsubscribe();
        });
    }

    ngOnDestroy() {
        // no-op
    }
}