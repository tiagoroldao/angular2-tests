
// Import the core angular services.
import { bootstrap } from "@angular/platform-browser-dynamic";

// Import the application components and services.
import { AppComponent } from "./app_component";

import {provideRouter} from '@ngrx/router';
import {routes} from './routes';

bootstrap( AppComponent , [provideRouter(routes)]);