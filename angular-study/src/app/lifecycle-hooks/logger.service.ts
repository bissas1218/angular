import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class LoggerService {
    
    logs:string[] = [];
    prevMsg = '';
    prevMsgCount = 1;

    log(msg:string){
        console.log('---log msg:', msg, ' prevMsg:', this.prevMsg);
        if(msg === this.prevMsg){
            // 메시지를 반복하고 마지막 로그 항목을 개수로 업데이트합니다.
           // this.logs[this.logs.length - 1] = msg + ` ($(this.prevMsgCount += 1)x)`;
        }else{

        }
    }

    clear() { 
        console.log('---clear---');
        this.logs = []; 
    }

    // 보기 새로고침을 예약하여 디스플레이가 따라잡을 수 있도록 합니다.
    tick() {
        console.log('---tick---');
        this.tick_then(
            () => { }
        );
    }

    tick_then(fn: () => any){
        console.log('---tick then---');
        setTimeout(fn, 0);
    }
}