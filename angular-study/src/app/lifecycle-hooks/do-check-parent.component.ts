import { Component, ViewChild } from "@angular/core";
import { DoCheckComponent } from "./do-check.component";
import { Hero } from "./hero";

@Component({
    selector: 'do-check-parent',
    template: `
        <div class="parent">
            <h2>{{title}}</h2>
            <label for="power-input">Power: </label>
            <input type="text" id="power-input" [(ngModel)]="power">

            <label for="hero-name">Hero.name: </label>
            <input type="text" id="hero-name" [(ngModel)]="hero.name">

            <button type="button" (click)="reset()">Reset Log</button>

            <do-check [hero]="hero" [power]="power"></do-check>

        </div>
    `
})
export class DoCheckParentComponent {

    hero!: Hero;
    title = 'DoCheck';
    power = '';

    @ViewChild(DoCheckComponent) childView!: DoCheckComponent;

    constructor(){
        this.reset();
    }

    reset(){
        this.hero = new Hero('Windstorm');
        this.power = 'sing';
        if(this.childView){
            this.childView.reset();
        }
    }
}