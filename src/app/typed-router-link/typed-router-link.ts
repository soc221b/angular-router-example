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
}
