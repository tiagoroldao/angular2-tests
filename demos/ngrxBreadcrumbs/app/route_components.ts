import {Component} from '@angular/core';

@Component({
    selector: "home",
    directives: [  ],
    template:
    `<div>Home component, with childs:</div>
    <a linkTo="/component-a" >A</a> |
    <a linkTo="/component-b">B</a>
    <br><br>
    <route-view></route-view>`
})
export class Home {

    constructor() {
    }
}

@Component({
    selector: "component-a",
    directives: [  ],
    template:
    `<div>A route component 'A', with childs:</div>
    <a linkTo="/component-a/one" >One</a> |
    <a linkTo="/component-a/two">Two</a>
    <br><br>
    <route-view></route-view>
    `
})
export class ComponentA {

    constructor() {
    }
}

@Component({
    selector: "component-b",
    directives: [  ],
    template:
    `<div>A route component 'B', with childs:</div>
    <a linkTo="/component-b/three">Three</a> |
    <a linkTo="/component-b/four">Four</a>
    <br><br>
    <route-view></route-view>
    `
})
export class ComponentB {

    constructor() {
    }
}

@Component({
    selector: "one",
    template:
    `ONE`
})
export class One {
    constructor() {
    }
}

@Component({
    selector: "two",
    template:
    `TWO`
})
export class Two {
    constructor() {
    }
}

@Component({
    selector: "three",
    template:
    `THREE`
})
export class Three {
    constructor() {
    }
}

@Component({
    selector: "four",
    template:
    `FOUR`
})
export class Four {
    constructor() {
    }
}