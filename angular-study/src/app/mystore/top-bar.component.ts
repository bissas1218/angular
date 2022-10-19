import { Component } from "@angular/core";

@Component({
    selector: 'app-top-bar',
    template: `
        <a [routerLink]="['/list']">
            <h1>My Store</h1>
        </a>

        <a routerLink="/cart" class="button fancy-button">
            <i class="material-icons">shopping_cart</i>Checkout
        </a>
    `,
    styleUrls:['./mystore.component.css']
})
export class TopBarComponent {

}