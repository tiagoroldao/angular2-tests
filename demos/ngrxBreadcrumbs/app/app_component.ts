import { Component } from "@angular/core";
import { Breadcrumbs } from "./breadcrumbs";

@Component({
    selector: "my-app",
    directives: [ Breadcrumbs ],
    template:
    `
    <breadcrumbs></breadcrumbs>
    <br><br>
    <route-view></route-view>`
})
export class AppComponent {

    constructor() {
    }
}