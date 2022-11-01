import { Component } from "@angular/core";

@Component({
    selector: 'app-lifecycle-hooks',
    template:`
    <body>
        <h1 id="top">Lifecycle Hooks</h1>
        <a href="#hooks">Peek-a-boo: (most) lifecycle hooks</a>
        
        <peek-a-boo-parent id="hooks"></peek-a-boo-parent>
        <a href="#top">back to top</a>
        <hr />
    </body>
    `,
    styleUrls: ['./lifecycle-hooks.css']
})
export class LifecycleHooksComponent { }