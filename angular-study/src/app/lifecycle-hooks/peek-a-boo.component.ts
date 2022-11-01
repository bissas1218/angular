import { Component, Input, SimpleChange } from "@angular/core";
import { LoggerService } from "./logger.service";
import { PeekABooDirective } from "./peek-a-boo.directive";

@Component({
    selector: 'peek-a-boo',
    template: `
        <p>Now you see my hero, {{name}}</p>
    `
})
export class PeekABooComponent extends PeekABooDirective {

    @Input() name = '';

    private verb = 'initialized';

    constructor(logger: LoggerService){
        super(logger);
        const is = this.name ? 'is' : 'is not';
        this.logIt(`name ${is} known at construction`);
    }

    // 부모에 의해 설정된 @Input변수가 있는 경우에만 호출됩니다.
    ngOnChanges(changes: any){//SimpleChange){
        console.log('changes:', changes);
        const changesMsgs: string[] = [];
        for(const propName in changes){
            //console.log(propName);
            if(propName === 'name'){
                const name = changes['name'].currentValue;
              //  console.log(name);
                changesMsgs.push(`name ${this.verb} to "${name}"`);
            }else{
                changesMsgs.push(propName + ' ' + this.verb);
            }
            console.log(changesMsgs);
        }
        this.logIt(`OnChanges: ${changesMsgs.join('; ')}`);
        this.verb = 'changed'; 
    }

    // 주의! 자주 호출됨! 페이지의 모든 변경 탐지 주기에 호출됨
    ngDoCheck(){
        //console.log('---ngDoCheck---');
        this.logIt('DoCheck');
    }

    ngAfterContentInit(){
        //console.log('---ngAfterContentInit---');
        this.logIt('AfterContentInit');
    }

    // 주의! 자주 호출됨! 페이지의 모든 변경 탐지 주기에 호출됨
    ngAfterContentChecked(){
        //console.log('---ngAfterContentChecked---');
        this.logIt('AfterContentChecked');
    }

    ngAfterViewInit(){
        //console.log('---ngAfterViewInit---');   
        this.logIt('AfterViewInit'); 
    }

    // 주의! 자주 호출됨! 페이지의 모든 변경 탐지 주기에 호출됨
    ngAfterViewChecked(){
        //console.log('---ngAfterViewChecked---');
        this.logIt('AfterViewChecked');
    }

    // 컴퍼넌트 ngIf false일때 호출
    ngOnDestroy(){
        //console.log('---ngOnDestroy---');
        this.logIt('OnDestroy');
    }
}