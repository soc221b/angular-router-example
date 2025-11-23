import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TypeSafeRouterLink } from './type-safe-router-link/type-safe-router-link';
import { routeHome } from './home/home.route';
import { routeProduct } from './product/product.route';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [RouterOutlet, TypeSafeRouterLink],
})
export class App {
  protected readonly routeHome = routeHome;
  protected readonly routeProduct = routeProduct;
}
