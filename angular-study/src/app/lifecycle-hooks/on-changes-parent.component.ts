import { HttpErrorResponse } from "@angular/common/http";
import { Component, ViewChild } from "@angular/core";
import { Hero } from "./hero";
import { OnChangesComponent } from "./on-changes.component";

@Component({
    selector: 'on-changes-parent',
    template: `
        <div class="parent">
            
            <h2>{{title}}</h2>

            <label for="power-input">Power: </label>
            <input type="text" id="power-input" [(ngModel)]="power">

            <label for="hero-name"> Hero.name: </label>
            <input type="text" id="hero-name" [(ngModel)]="hero.name">

            <button type="button" (click)="reset()">Reset Log</button>

            <on-changes [hero]="hero" [power]="power"></on-changes>

        </div>
    `,
    styles: ['']
})
export class OnChangesParentComponent {

    hero!: Hero;
    power = '';
    title = 'OnChanges';
    @ViewChild(OnChangesComponent) childView!: OnChangesComponent;

    constructor(){
        this.reset();
    }

    reset(){
        // 매번 새 Hero객체; 변경 시 트리거
        this.hero = new Hero('Windstorm');
        // power 설정 이 값이 다를 경우 onChanges에만 트리거
        this.power = 'sing';
        if(this.childView){
            this.childView.reset();
        }
    }
}