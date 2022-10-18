import { Component, OnChanges } from "@angular/core";
import { products } from "./products";

@Component({
    selector: 'app-product-list',
    template: `
        <h2>Products</h2>

        <div *ngFor="let product of products">
            <h3>
                <a [title]="product.name + ' details'" [routerLink]="['/products', product.id]">
                    {{product.name}}
                </a>
            </h3>
        </div>
    `
})
export class ProductListComponent implements OnChanges {

    products = products;

    ngOnChanges():void {

    }
}