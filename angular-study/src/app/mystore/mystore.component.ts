import { Component } from "@angular/core";

@Component({
    selector: 'app-mystore',
    template: `
    <body>
        <app-top-bar></app-top-bar>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
    </body>
    `,
    styleUrls:['./mystore.component.css']
})
export class MystoreComponent {

}