import { Route } from '@ngrx/router';
import { Home, One, Two } from './route_components';

export const routes: Route[] = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/one',
    component: One,
  },
  {
    path: '/two',
    component: Two
  }
];