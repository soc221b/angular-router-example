import { Route } from '@angular/router';
import { routeInfo } from './info/info.route';
import { routeReview } from './review/review.route';

export const routeProduct = {
  path: 'product/:id' as const,
  title: 'Product',
  loadComponent: () => import('./product').then((module) => module.Product),
  children: [routeInfo, routeReview],
} satisfies Route;
