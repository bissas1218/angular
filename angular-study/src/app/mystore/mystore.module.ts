import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { TopBarComponent } from "./top-bar.component";
import { MystoreComponent } from "./mystore.component";
import { AppRoutingModule } from "../app-routing.module";
import { ProductListComponent } from "./product-list.component";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "../app.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ProductDetailsComponent } from "./product-details.component";


@NgModule({
    declarations: [        
        TopBarComponent,
        MystoreComponent,
        ProductListComponent,
        ProductDetailsComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {path:'list', component: ProductListComponent},
            {path:'products/:productId', component: ProductDetailsComponent}
        ])
    ],
    providers: [

    ],
    exports:[
        TopBarComponent,
        MystoreComponent
    ],
    bootstrap:[
     //   AppComponent
    ],
    schemas:[
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
    ]
})
export class MyStoreModule { }