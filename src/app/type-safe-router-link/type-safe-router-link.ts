import { Component, computed, input } from '@angular/core';
import { Route, RouterLink } from '@angular/router';
import { RouteParameters } from './route-parameters';

@Component({
  selector: 'app-type-safe-router-link',
  templateUrl: './type-safe-router-link.html',
  imports: [RouterLink],
})
export class TypeSafeRouterLink<T extends Route> {
  readonly route = input.required<T>();

  readonly parameters = input.required<RouteParameters<T>>();

  protected readonly routerLink = computed(() => {
    let path = this.route().path;
    for (const [key, value] of Object.entries(this.parameters())) {
      path = path?.replace(':' + key, value);
    }
    return path;
  });
}
