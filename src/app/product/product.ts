import { Component, input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.html',
})
export class Product {
  readonly id = input.required<number>();
}
