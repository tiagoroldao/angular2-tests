
// Import the core angular services.
import { bootstrap } from "@angular/platform-browser-dynamic";

// Import the application components and services.
import { AppComponent } from "./app.component";
import { PositionService } from "./position.service";

bootstrap( AppComponent, [PositionService] );