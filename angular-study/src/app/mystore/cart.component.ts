import { Component } from "@angular/core";
import { CartService } from "./cart.service";

@Component({
    selector: 'app-cart',
    template: `
        <h3>Cart</h3>

        <p>
            <a routerLink="/shipping">Shipping Prices</a>
        </p>

        <div class="cart-item" *ngFor="let item of items">
            <span>{{item.name}}</span>
            <span>{{item.price | currency}}</span>
        </div>

        <form>

        </form>
    `
})
export class CartComponent {

    items = this.cartService.getItem();

    constructor(private cartService: CartService){}

}