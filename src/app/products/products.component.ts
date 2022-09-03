import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  styles: [
    'td, th { border: 1px solid black; }',
    'tbody { font-family: Verdana, Geneva, sans-serif; }'
  ],
  template: `
    <table *ngIf="products && products.length">
      <thead><tr><th>Title</th><th>Count</th></tr>
      </thead>
      <tbody>
        <tr *ngFor="let product of products">
          <td>{{product.title}}</td><td>{{product.count}}</td>
        </tr>
      </tbody>
    </table>
    <p *ngIf="!products || !products.length">No items found!</p>
  `
})
export class ProductsComponent implements OnInit {
  products: any[] = [
    { title: `Nike Shoes - Jordans`, count: 150 },
    { title: `Adidas Shoes - Blahblah`, count: 200 }
  ];

  constructor() {
    console.log(Boolean(this.products));
    console.log(Boolean(this.products.length !== 0));
  }

  ngOnInit(): void {
  }
}
