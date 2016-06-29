import {Component} from '@angular/core';
import {NgFor, NgIf} from '@angular/common';
import {Router, Match, RouterInstruction, Route} from '@ngrx/router';
import pathToRegexp from 'path-to-regexp';

@Component({
    selector: 'breadcrumbs',
    directives: [ NgFor ],
    template:
    `<span>
        <span *ngFor="let breadcrumb of breadcrumbs; let isLast = last">
            <a [linkTo]="breadcrumb.path">{{breadcrumb.name}}</a>
            <span *ngIf="!isLast"> &gt; </span>
        </span>
    </span>`
})
export class Breadcrumbs {
    private breadcrumbs: any[];

    constructor(private routerInstruction: RouterInstruction) {
        this.routerInstruction
            .subscribe(
                match => {
                    this.breadcrumbs = this.getBreadcrumbs(match);
                }
            );
    }

    private getBreadcrumbs (match: Match) {
        let breadcrumbs = [];
        let path = '';

        for (let i = 0; i < match.routes.length; i++) {
            path = path[path.length - 1] === '/' ? path.substr(0, path.length - 1) : path;
            path += match.routes[i].path ? this.makePath(match.routes[i], match) : '';
            if ((match.routes[i].options || {}).breadcrumb) {
                breadcrumbs.push({
                    name: match.routes[i].options.breadcrumb,
                    path: path
                });
            }
        }

        return breadcrumbs;
    }

    private makePath (route: Route, match: Match) {
        return pathToRegexp.compile(route.path)(match.routeParams);
    }
}
