import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { LifecycleHooksComponent } from "./lifecycle-hooks.component";
import { PeekABooParentComponent } from "./peek-a-boo-parent.component";


@NgModule({
    imports: [
        
    ],
    declarations:[
        LifecycleHooksComponent,
        PeekABooParentComponent
    ],
    exports:[
        LifecycleHooksComponent
    ],
    bootstrap:[]
})
export class LifecycleHooksModule { }