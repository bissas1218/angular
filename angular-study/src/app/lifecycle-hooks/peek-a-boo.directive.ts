import { Directive, OnInit } from "@angular/core";
import { LoggerService } from "./logger.service";

let nextId = 1;

@Directive({
    selector: '[appPeekABoo]'
})
export class PeekABooDirective implements OnInit {

    constructor(private logger: LoggerService){

    }

    ngOnInit(): void {
        //console.log('peek a boo directive ngOnInit');
        this.logIt('OnInit');
    }

    logIt(msg:string){
        //console.log('logIt');
        this.logger.log(`#${nextId++} ${msg}`);
    }
}