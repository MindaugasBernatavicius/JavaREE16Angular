import { ProductService } from './../../services/product.service';
import { IProduct } from './../../models/IProduct';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-products',
  styles: [
    'table, p { width: 50vw } '
    // 'td, th { border: 1px solid black; }',
    // 'tbody { font-family: Verdana, Geneva, sans-serif; }'
  ],
  template: `
    <label>Filter:</label>
    <input type="text" (input)="filter($event)">
    <hr>

    <table *ngIf="filteredProducts && filteredProducts.length; else noProducts" class="table table-striped">
      <thead class="table-dark">
        <tr>
          <th>Title</th>
          <th>Count</th>
          <th>Price</th>
          <th>Rate</th>
        </tr>
      </thead>
      <tbody class="table-group-divider">
        <tr *ngFor="let product of filteredProducts">
          <td>{{ product.title }}</td>
          <td>{{ product.count }}</td>
          <td>{{ product.price | currency:'EUR':'symbol':'.1-1' }}</td>
          <!-- <td>{{ product.price | currency:'EUR':'symbol':'.2-2' }}</td> -->
          <!-- <td>{{ product | json }}</td> -->
          <td><app-star [rating]="product.rating"></app-star></td>
        </tr>
      </tbody>
    </table>
    <ng-template #noProducts>
      <p class="alert alert-warning">No items found!</p>
    </ng-template>

    <br><hr>
    <form #myForm="ngForm">
      <div class="form-group">
        <label for="in1">Title</label>
        <input name="title" type="text" class="form-control" id="in1" ngModel>
      </div>
      <div class="form-group">
        <label for="in2">Count</label>
        <input name="count" type="number" class="form-control" id="in2" ngModel>
      </div>
      <button class="btn btn-primary" (click)="createProduct()">Submit</button>
    </form>
    <!-- {{ myForm.value | json }} -->
  `
})
export class ProductsComponent implements OnInit {
  products: IProduct[] = [];
  filteredProducts: IProduct[] = [];
  @ViewChild('myForm') private myFormVar: NgForm = {} as NgForm;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      res => {
        console.log(res);
        this.products = res;
        this.filteredProducts = res;
      },
      err => console.log(err)
    );

    // console.log(Boolean(this.products));
    // console.log(Boolean(this.products.length !== 0));
  }

  filter($event: Event): void {
    let filterVal = ($event.target as HTMLInputElement).value.toLocaleLowerCase();
    this.filteredProducts = this.products.filter(p => p.title.toLowerCase().includes(filterVal));
  }

  createProduct(): void {
    // console.log(this.myFormVar.value);
    this.productService.createProduct(this.myFormVar.value).subscribe(
      res => {
        this.products.push(res);
        this.filteredProducts = this.products;
        this.myFormVar.resetForm();
      },
      err => console.log(err)
    );
  }
}
