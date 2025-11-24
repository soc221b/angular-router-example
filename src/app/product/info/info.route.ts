import { Route } from '@angular/router';

export const routeInfo = {
  path: 'info' as const,
  title: 'Info',
  loadComponent: () => import('./info').then((module) => module.Info),
} satisfies Route;
