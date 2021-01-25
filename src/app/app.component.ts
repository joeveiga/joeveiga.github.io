import { Component } from "@angular/core";

@Component({
  selector: "jvdev-root",
  template: `
    <div style="text-align:center" class="content">
      <h1>It's alive!</h1>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {}
