import { Component } from "@angular/core";

@Component({
  selector: "jvdev-root",
  template: `
    <div style="text-align:center" class="content">
      <h1>It's alive!</h1>
      <h3>Not quite...</h3>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: [
    `
      h1 {
        font-family: "Retro Gaming";
      }

      h3 {
        font-family: "Montserrat";
      }
    `,
  ],
})
export class AppComponent {}
