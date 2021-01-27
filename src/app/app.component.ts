import { Component } from "@angular/core";

@Component({
  selector: "jvdev-root",
  template: ` <router-outlet></router-outlet> `,
  styles: [
    `
      :host {
        flex: 1;
      }

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
