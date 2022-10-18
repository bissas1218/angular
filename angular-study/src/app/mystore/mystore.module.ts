import { NgModule } from "@angular/core";
import { TopBarComponent } from "./top-bar.component";
import { MystoreComponent } from "./mystore.component";

@NgModule({
    declarations: [
        TopBarComponent,
        MystoreComponent
    ],
    imports: [

    ],
    providers: [

    ],
    exports:[
        TopBarComponent,
        MystoreComponent
    ],
    bootstrap:[

    ]
})
export class MyStoreModule { }