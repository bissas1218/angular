import { Component } from "@angular/core";
import { FormBuilder, FormControl } from "@angular/forms";
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

        <form [formGroup]="checkoutForm" (ngSubmit)="onSubmit()">
            <div>
                <label for="name">
                    Name
                </label>
                <input id="name" type="text" formControlName="name">
            </div>

            <div>
                <label for="address">
                    Address
                </label>
                <input id="address" type="text" formControlName="address">
            </div>

            <button class="button" type="submit">Purchase</button>

        </form>
    `
})
export class CartComponent {

    items = this.cartService.getItem();

    constructor(private cartService: CartService, private formBuilder: FormBuilder){}

    checkoutForm = this.formBuilder.group({
        name: '',
        address: ''
    });

    onSubmit(): void {
        console.log('---on submit---');
        console.log('cart clear before:', this.cartService.getItem());
        this.items = this.cartService.clearCart();
        console.log('cart clear after:', this.cartService.getItem());
        console.warn('Your order has been submitted', this.checkoutForm.value);
        this.checkoutForm.reset();
        console.warn('checkout form reset', this.checkoutForm.value);
    }

}