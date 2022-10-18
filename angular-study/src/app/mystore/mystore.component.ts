import { Component } from "@angular/core";

@Component({
    selector: 'app-mystore',
    template: `
        <app-top-bar></app-top-bar>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
    `,
    styleUrls:['./mystore.component.css']
})
export class MystoreComponent {

}