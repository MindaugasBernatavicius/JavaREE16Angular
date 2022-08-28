import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-header></app-header>
  <hr>
    <div class="container">
      <p>Hello world!</p>
      <div>{{title}}</div>
      <div>{{name + " !!!"}}</div>
      <div>{{title + name + " !!!"}}</div>
      <div>{{ 1 + 2 }}</div>
      <!-- <div>{{ greet() }}</div> -->
      <button (click)="greet()" class="btn btn-warning">Greet</button>
      <p>{{message}}</p>
    </div>
  <hr>
  <app-footer></app-footer>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'JREE16Angular';
  name = "Mindaugas";
  message = "";

  constructor() {
    console.log("@@@ AppComponent initialized!");
  }

  greet() {
    this.message = "This is the message after click!";
  };
}
