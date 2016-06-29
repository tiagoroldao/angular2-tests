import { Route } from '@ngrx/router';
import { Home, ComponentA, ComponentB, One, Two, Three, Four } from './route_components';

export const routes: Route[] = [
  {
    path: '/',
    component: Home,
    options: {
        breadcrumb: 'Home Sweet Home'
    },
    children: [
      {
        path: '/component-a',
        component: ComponentA,
        options: {
            breadcrumb: 'A Component'
        },
        children: [
          {
            path: '/one',
            component: One,
            options: {
                breadcrumb: 'The One'
            }
          },
          {
            path: '/two',
            component: Two,
            options: {
                breadcrumb: 'The Two'
            }
          }
        ]
      },
      {
        path: '/component-b',
        component: ComponentB,
        options: {
            breadcrumb: 'Another Component'
        },
        children: [
          {
            path: '/three',
            component: Three,
            options: {
                breadcrumb: 'The Three'
            }
          },
          {
            path: '/four',
            component: Four,
            options: {
                breadcrumb: 'The Four'
            }
          }
        ]
      },
    ]
  },
];