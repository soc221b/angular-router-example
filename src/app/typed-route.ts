import { InputSignal, Type } from '@angular/core';
import { Route } from '@angular/router';
import { RouteParameters } from './typed-router-link/route-parameters';

export type TypedRoute<P extends string = string> = string extends P
  ? never
  : Route & {
      path: P;
      component?: ComponentWithInput<P>;
      loadComponent?: () => Promise<ComponentWithInput<P>>;
    };

type ComponentWithInput<P extends string = string> = Type<any> & {
  new (): Record<keyof RouteParameters<{ path: P }>, InputSignal<string>>;
};
