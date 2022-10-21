import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { TopBarComponent } from "./top-bar.component";
import { MystoreComponent } from "./mystore.component";
import { AppRoutingModule } from "../app-routing.module";
import { ProductListComponent } from "./product-list.component";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "../app.component";
import { CommonModule } from "@angular/common";
import { FormBuilder, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProductDetailsComponent } from "./product-details.component";
import { CartComponent } from "./cart.component";
import { ShippingComponent } from "./shipping.component";
import { ProductAlertsComponent } from "./product-alerts.component";


@NgModule({
    declarations: [        
        TopBarComponent,
        MystoreComponent,
        ProductListComponent,
        ProductDetailsComponent,
        CartComponent,
        ShippingComponent,
        ProductAlertsComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            {path:'list', component: ProductListComponent},
            {path:'products/:productId', component: ProductDetailsComponent},
            {path:'cart', component: CartComponent},
            {path:'shipping', component: ShippingComponent}
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
        
    ]
})
export class MyStoreModule { }