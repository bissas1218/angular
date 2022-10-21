import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { CartService } from "./cart.service";

@Component({
    selector: 'app-shipping',
    template: `
        <h3>Shipping Prices</h3>
        <div class="shipping-item" *ngFor="let shipping of shippingCosts | async">
            <span>{{shipping.type}}</span>
            <span>{{shipping.price | currency}}</span>
        </div>
    `
})
export class ShippingComponent implements OnInit {
    
    shippingCosts!: Observable<{ type:string, price:number }[]>;   

    constructor(private cartService: CartService){

    }

    ngOnInit(): void {
        console.log('000');
        this.shippingCosts = this.cartService.getShippingPrices();
        console.log('333 : ', this.shippingCosts);
    }
}