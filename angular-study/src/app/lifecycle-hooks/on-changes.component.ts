import { Component, Input, SimpleChange } from "@angular/core";
import { Hero } from "./hero";

@Component({
    selector: 'on-changes',
    template: `
        <div class="info">
            <p>{{hero.name}} can {{power}}</p>

            <h3>Change Log</h3>
            <div *ngFor="let chg of changeLog" class="log">{{chg}}</div>
        </div>
    `
})
export class OnChangesComponent {

    @Input() hero!: Hero;
    @Input() power = '';

    changeLog: string[] = [];

    ngOnChanges(changes: any){//SimpleChange){
        console.log('changes:', changes);
        for(const propName in changes){
            const chng = changes[propName];
            console.log('chng:', chng);
            const cur = JSON.stringify(chng.currentValue);
            console.log('cur:', cur);
            const prev = JSON.stringify(chng.previousValue);
            console.log('prev:', prev);
            this.changeLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
        }
    }

    reset(){
        this.changeLog = [];
    }
}