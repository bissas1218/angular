import { Component, OnChanges, SimpleChanges } from "@angular/core";
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

            <p *ngIf="product.description">
                Description: {{product.description}}
            </p>

            <button type="button" (click)="share()">
                Share
            </button>

            <app-product-alerts [product]="product" (notify)="onNotify()"></app-product-alerts>
        </div>

        
    `
})
export class ProductListComponent implements OnChanges {

    products = products;

    share(){
        window.alert('The product has been shared!');
    }

    onNotify(){
        window.alert('You will be notified when the product goes on sale');
    }

    ngOnChanges(changes: SimpleChanges): void{
        console.warn('on changes :', changes);
    }
}