import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  template: `
    <input type="number" [(ngModel)]=n1>
    <input type="number" [(ngModel)]=n2>
    <button (click)="add()">+</button>
    <button (click)="mult()">*</button>
    <hr>
    <p *ngIf="showResult">{{ result }}</p>
  `,
})
export class CalculatorComponent implements OnInit, OnDestroy {

  constructor() {
    console.log("constructor");
  }

  ngOnChanges(): void {
    console.log("ngOnChanges");
  }

  ngOnInit(): void {
    console.log("ngOnInit");
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy");
  }

  n1: number = 0;
  n2: number = 0;
  result: number = 0;
  showResult: boolean = false;

  add = () => {
    console.log(this.n1 + this.n2);
    this.result = this.n1 + this.n2;
    this.showResult = true;
  }
  mult = () => {
    console.log(this.n1 * this.n2);
    this.result = this.n1 * this.n2;
    this.showResult = true;
  }
}
