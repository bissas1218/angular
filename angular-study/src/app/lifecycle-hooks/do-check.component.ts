import { Component, DoCheck, Input } from "@angular/core";
import { Hero } from "./hero";

@Component({
    selector: 'do-check',
    template: `
        <div class="info">
            <p>{{hero.name}} can {{power}}</p>
        </div>
    `
})
export class DoCheckComponent implements DoCheck {

    @Input() hero!: Hero;
    @Input() power = '';

    ngDoCheck(){
        console.log('---ngDoCheck---');
    }
    
    reset(){

    }
}