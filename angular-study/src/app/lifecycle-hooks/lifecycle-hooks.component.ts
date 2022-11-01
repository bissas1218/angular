import { Component } from "@angular/core";

@Component({
    selector: 'app-lifecycle-hooks',
    template:`
    <body>
        <h1 id="top">Lifecycle Hooks</h1>
        <a href="#hooks">Peek-a-boo: (most) lifecycle hooks</a><br/>
        <a href="#spy">Spy: directive with OnInit & OnDestroy</a><br/>
        <a href="#onchanges">OnChanges</a><br/>
        <a href="#docheck">DoCheck</a><br/>

        <peek-a-boo-parent id="hooks"></peek-a-boo-parent>
        <a href="#top">back to top</a>
        <hr />

        <spy-parent id="spy"></spy-parent>
        <a href="#top">back to top</a>
        <hr/>

        <on-changes-parent id="onchanges"></on-changes-parent>
        <a href="#top">back to top</a>
        <hr/>

        <do-check-parent id="docheck"></do-check-parent>
        <a href="#top">back to top</a>
        <hr/>
        
    </body>
    `,
    styleUrls: ['./lifecycle-hooks.css']
})
export class LifecycleHooksComponent { }