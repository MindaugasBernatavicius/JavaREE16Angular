import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-header></app-header>
  <div class="container center">
    <!-- <app-calculator></app-calculator> -->
    <!-- <app-products></app-products> -->
    <router-outlet></router-outlet>
  </div>
  <!-- <app-footer></app-footer> -->
  `,
  styles: [
    '.center { height: 90vh; '
    + 'display: flex;'
    + 'justify-content: center;'
    + 'align-items: center }'
  ]
})
export class AppComponent {

}
