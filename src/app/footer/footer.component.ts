import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <div>
      <p class="header">My footer head</p>
      <p>This is footer <span class="my-span">{{prependVariable}}</span></p>
    </div>
  `,
  styles: [
    'p {color: red}',
    '.my-span {background-color: red; color: black}'
  ]
})
export class FooterComponent implements OnInit {
  prependVariable = "!";
  constructor() { }
  ngOnInit(): void { }
}
