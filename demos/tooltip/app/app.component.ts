import { Component } from "@angular/core";
import { TooltipDirective } from "./tooltip.component";

@Component({
    selector: "my-app",
    directives: [ TooltipDirective ],
    template:
    `
    <h2>
        Hover for a tooltip on the
        <span [tooltip]="{position:'left'}">
            left
            <template #tooltipTemplate>
                I'm a popover box!
            </template>
        </span>,
        <span [tooltip]="{position:'right'}">
            right
            <template #tooltipTemplate>
                I'm a popover box!
            </template>
        </span>,
        <span [tooltip]="{position:'top'}">
            top
            <template #tooltipTemplate>
                I'm a popover box!
            </template>
        </span>, or 
        <span [tooltip]="{position:'bottom'}">
            bottom
            <template #tooltipTemplate>
                I'm a popover box!
            </template>
        </span>
    </h2>
    `,
    styles: [
        `
        span {
            color: blue;
        }`
    ]
})
export class AppComponent {

    constructor() {
    }
}