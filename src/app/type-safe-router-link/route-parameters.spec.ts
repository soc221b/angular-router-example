import { RouteParameters } from './route-parameters';
import { expectType, TypeEqual } from 'ts-expect';

describe('RouteParameters', () => {
  test('path should be narrowed', () => {
    expectType<TypeEqual<RouteParameters<{ path: string }>, never>>(true);
  });

  test('no parameters', () => {
    expectType<TypeEqual<RouteParameters<{ path: '' }>, {}>>(true);
    expectType<TypeEqual<RouteParameters<{ path: 'about' }>, {}>>(true);
  });

  test('single parameter', () => {
    expectType<TypeEqual<RouteParameters<{ path: ':id' }>, { id: string }>>(true);
    expectType<TypeEqual<RouteParameters<{ path: 'product/:id' }>, { id: string }>>(true);
    expectType<TypeEqual<RouteParameters<{ path: 'product/:id/' }>, { id: string }>>(true);
  });

  test('multiple parameters', () => {
    expectType<
      TypeEqual<
        RouteParameters<{ path: ':id/:social-media' }>,
        { id: string; 'social-media': string }
      >
    >(true);
    expectType<
      TypeEqual<
        RouteParameters<{ path: 'product/:id/:social-media' }>,
        { id: string; 'social-media': string }
      >
    >(true);
    expectType<
      TypeEqual<
        RouteParameters<{ path: 'product/:id/:social-media/' }>,
        { id: string; 'social-media': string }
      >
    >(true);
  });
});
