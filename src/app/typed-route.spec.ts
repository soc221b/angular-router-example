import { Route } from '@angular/router';
import { expectType, TypeOf } from 'ts-expect';
import { TypedRoute } from './typed-route';
import { Component, input } from '@angular/core';

@Component({
  selector: '',
  template: '',
})
class NoInput {}

@Component({
  selector: '',
  template: '',
})
class OneInput {
  a = input.required<string>();
}

describe('TypedRoute', () => {
  it('should be type of Route', () => {
    expectType<TypeOf<Route, TypedRoute<string>>>(true);

    expect(true).toBeTruthy();
  });

  it('should check whether the component has the corresponding input', () => {
    let _;

    _ = {
      path: ':a',
      // @ts-expect-error
      component: NoInput,
    } satisfies TypedRoute<':a'>;
    _ = {
      path: 'parent/:a',
      // @ts-expect-error
      component: NoInput,
    } satisfies TypedRoute<'parent/:a'>;
    _ = {
      path: ':a/child',
      // @ts-expect-error
      component: NoInput,
    } satisfies TypedRoute<':a/child'>;

    _ = {
      path: ':a',
      component: OneInput,
    } satisfies TypedRoute<':a'>;
    _ = {
      path: 'parent/:a',
      component: OneInput,
    } satisfies TypedRoute<'parent/:a'>;
    _ = {
      path: ':a/child',
      component: OneInput,
    } satisfies TypedRoute<':a/child'>;
  });
});
