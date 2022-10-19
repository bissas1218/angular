import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CartService } from "./cart.service";
import { Product, products } from "./products";

@Component({
    selector: 'app-product-details',
    template: `
        <h2>Product Details</h2>
        <div *ngIf="product">
            <h3>{{product.name}}</h3>
            <h4>{{product.price}}</h4>
            <p>{{product.description}}</p>
            <button type="button" (click)="addToCart(product)">Buy</button>
        </div>
    `
})
export class ProductDetailsComponent implements OnInit {

    product: Product | undefined;

    constructor(private route: ActivatedRoute, private cartService: CartService){}

    ngOnInit():void{
        
        // 현재 라우트로 부터 첫번째 상품id를 얻는다.
        const routeParams = this.route.snapshot.paramMap;
        console.log(routeParams);
        const productIdFromRoute = Number(routeParams.get('productId'));
        console.log(productIdFromRoute);
        this.product = products.find(product => product.id === productIdFromRoute);
        console.log(this.product);
    }

    // 장바구니 담기
    addToCart(product: Product){
        this.cartService.addToCart(product);
        window.alert('Your product has been added to the cart!');
    }

}