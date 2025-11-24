import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TypeSafeRouterLink } from './type-safe-router-link/type-safe-router-link';
import { routeHome } from './home/home.route';
import { routeProduct } from './product/product.route';
import { routeTeam } from './team/team.route';
import { routeUser } from './team/user/user.route';
import { routeInfo } from './product/info/info.route';
import { routeReview } from './product/review/review.route';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [RouterOutlet, TypeSafeRouterLink],
})
export class App {
  protected readonly routeHome = routeHome;
  protected readonly routeProduct = routeProduct;
  protected readonly routeInfo = routeInfo;
  protected readonly routeReview = routeReview;
  protected readonly routeTeam = routeTeam;
  protected readonly routeUser = routeUser;
}
