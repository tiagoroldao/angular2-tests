
// Import the core angular services.
import { ViewContainerRef } from "@angular/core";
import { bootstrap } from "@angular/platform-browser-dynamic";

// Import the application components and services.
import { AppComponent } from "./app.component";
import { PingService } from "./ping-service";

bootstrap( AppComponent, [PingService, ViewContainerRef] );