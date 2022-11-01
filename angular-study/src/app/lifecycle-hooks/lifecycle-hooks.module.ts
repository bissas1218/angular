import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { DoCheckParentComponent } from "./do-check-parent.component";
import { DoCheckComponent } from "./do-check.component";
import { LifecycleHooksComponent } from "./lifecycle-hooks.component";
import { LoggerService } from "./logger.service";
import { OnChangesParentComponent } from "./on-changes-parent.component";
import { OnChangesComponent } from "./on-changes.component";
import { PeekABooParentComponent } from "./peek-a-boo-parent.component";
import { PeekABooComponent } from "./peek-a-boo.component";
import { SpyParentComponent } from "./spy.component";


@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations:[
        LifecycleHooksComponent,
        PeekABooParentComponent,
        PeekABooComponent,
        SpyParentComponent,
        OnChangesParentComponent,
        OnChangesComponent,
        DoCheckParentComponent,
        DoCheckComponent
    ],
    exports:[
        LifecycleHooksComponent
    ],
    bootstrap:[]
})
export class LifecycleHooksModule { }