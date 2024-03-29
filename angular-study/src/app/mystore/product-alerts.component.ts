import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Product } from "./products";

@Component({
    selector: 'app-product-alerts',
    template: `
        <p *ngIf="product && product.price > 700">
            <button type="button" (click)="notify.emit()">Notify Me {{product.price | currency}}</button>
        </p>
    `
})
export class ProductAlertsComponent {
    @Input() product!: Product | undefined;
    @Output() notify = new EventEmitter();
}