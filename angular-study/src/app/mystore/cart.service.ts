import { Injectable } from "@angular/core";
import { Product } from "./products";
import { HttpClient } from '@angular/common/http'

@Injectable({
    providedIn: 'root'
})
export class CartService {
    
    items: Product[] = [];

    constructor(private http: HttpClient){}

    addToCart(product: Product){
        console.log('cart service call : ', product);
        this.items.push(product);
    }

    getItem(){
        return this.items;
    }

    clearCart(){
        this.items = [];
        return this.items;
    }

    getShippingPrices(){
        return this.http.get<{type:string, price:number}>('./shipping.json');
    }
}