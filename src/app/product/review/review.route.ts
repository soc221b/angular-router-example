import { Route } from '@angular/router';

export const routeReview = {
  path: 'review' as const,
  title: 'Review',
  loadComponent: () => import('./review').then((module) => module.Review),
} satisfies Route;
