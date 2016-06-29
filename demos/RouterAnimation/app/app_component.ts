import { Component } from "@angular/core";

@Component({
    selector: "my-app",
    directives: [  ],
    template:
    `<a linkTo="/">Home</a> | 
    <a linkTo="/one" >One</a> |
    <a linkTo="/two">Two</a>
    <br><br>
    <route-view></route-view>`
})
export class AppComponent {

    constructor() {
    }
}