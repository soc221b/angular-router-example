import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TypedRouterLink } from './typed-router-link/typed-router-link';
import { routeHome } from './home/home.route';
import { routeProduct } from './product/product.route';
import { routeTeam } from './team/team.route';
import { routeUser } from './team/user/user.route';
import { routeInfo } from './product/info/info.route';
import { routeReview } from './product/review/review.route';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [RouterOutlet, TypedRouterLink],
})
export class App {
  protected readonly routeHome = routeHome;
  protected readonly routeProduct = routeProduct;
  protected readonly routeInfo = routeInfo;
  protected readonly routeReview = routeReview;
  protected readonly routeTeam = routeTeam;
  protected readonly routeUser = routeUser;

  protected readonly code = `
import { Component, computed, input } from '@angular/core';
import { Route, RouterLink } from '@angular/router';
import { RoutesParameters } from './route-parameters';

@Component({
  selector: 'app-typed-router-link',
  templateUrl: './typed-router-link.html',
  imports: [RouterLink],
})
export class TypedRouterLink<T extends [Route, ...Route[]]> {
  readonly routes = input.required<T>();

  readonly parameters = input.required<RoutesParameters<T>>();

  protected readonly routerLink = computed(() =>
    this.routes()
      .map((route) => route.path)
      .map((path) =>
        Object.entries(this.parameters()).reduce(
          (path, [key, value]) => path?.replace(':' + key, value),
          path,
        ),
      )
      .join('/'),
  );

  protected readonly title = computed(() => this.routes()[this.routes().length - 1]['title']);
}`.trim();
}
