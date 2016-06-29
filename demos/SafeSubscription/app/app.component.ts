import { Component, ElementRef } from "@angular/core";
import { NgIf } from "@angular/common";
import { SafeParentComponent } from "./safeParentComponent";
import { UnsafeParentComponent } from "./unsafeParentComponent";
import { PingService } from "./ping-service";

@Component({
    selector: "my-app",
    directives: [ UnsafeParentComponent, SafeParentComponent, NgIf ],
    template:
    `
        <safe-parent *ngIf="showSafeParent"></safe-parent>
        <span *ngIf="!showSafeParent">[no parent]</span>
        <br>
        <button (click)="toggleShowSafeParent()">Toggle safe parent</button>
        <br>
        <br>
        <unsafe-parent *ngIf="showUnsafeParent"></unsafe-parent>
        <span *ngIf="!showUnsafeParent">[no parent]</span>
        <br>
        <button (click)="toggleShowUnsafeParent()">Toggle unsafe parent</button>
    `
})
export class AppComponent {
    private showSafeParent: boolean = false;
    private showUnsafeParent: boolean = false;

    constructor() {
    }

    private toggleShowSafeParent () {
        this.showSafeParent = !this.showSafeParent;
    }

    private toggleShowUnsafeParent () {
        this.showUnsafeParent = !this.showUnsafeParent;
    }
}