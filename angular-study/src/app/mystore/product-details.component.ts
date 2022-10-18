import { Component } from "@angular/core";
import { Product } from "./products";

@Component({
    selector: 'app-product-details',
    template: `
        <h2>Product Details</h2>
        <div *ngIf="product">
            <h3>{{product}}</h3>
        </div>
    `
})
export class ProductDetailsComponent {

    product: Product | undefined;

}