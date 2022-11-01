import { Component } from "@angular/core";
import { LoggerService } from "./logger.service";

@Component({
    selector: 'peek-a-boo-parent',
    template: `
    
        <hr/>
        <div class="parent">
            <h2>Peek-A-Boo</h2>
            <button type="button" (click)="toggleChild()">
                {{hasChild ? 'Destroy' : 'Create'}} PeekABooComponent
            </button>
            <button type="button" (click)="updateHero()" [hidden]="!hasChild">
                Update Hero
            </button>

            <div class="info">
                <h3>Lifecycle Hook Log</h3>
            </div>
        </div>
    `,
    styleUrls: ['./lifecycle-hooks.css']
})
export class PeekABooParentComponent {
    
    hasChild = false;
    hookLog: string[] = [];

    heroName = 'Windstorm';
    private logger: LoggerService;

    constructor(logger: LoggerService){
        this.logger = logger;
        this.hookLog = logger.logs;
    }

    toggleChild(){
        this.hasChild = !this.hasChild;
        if(this.hasChild){
            this.heroName = 'Windstorm';
            this.logger.clear();
        }
        this.hookLog = this.logger.logs;
        console.log('hookLog:', this.hookLog);
        this.logger.tick();
    }

    updateHero(){
        this.heroName += '!';
        this.logger.tick();
    }
}