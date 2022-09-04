import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-header></app-header>
  <div class="container center">
    <div class="mt-3">
      <!-- <app-calculator></app-calculator> -->
      <!-- <app-products></app-products> -->
      <router-outlet></router-outlet>
    </div>
  </div>
  <!-- <app-footer></app-footer> -->
  `,
  styles: [
    '.center { height: 90vh; '
    + 'display: flex;'
    + 'justify-content: center;}'
  ]
})
export class AppComponent {

}
