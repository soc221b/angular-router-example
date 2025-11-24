import { TypedRoute } from '../typed-route';
import { routeInfo } from './info/info.route';
import { routeReview } from './review/review.route';

const path = 'product/:id';
export const routeProduct = {
  path,
  title: 'Product',
  loadComponent: () => import('./product').then((module) => module.Product),
  children: [routeInfo, routeReview],
} satisfies TypedRoute<typeof path>;
