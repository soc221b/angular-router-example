import { Route } from '@angular/router';

export const routeProduct = {
  path: 'product/:id' as const,
  title: 'Product',
  loadComponent: () => import('./product').then((module) => module.Product),
} satisfies Route;
