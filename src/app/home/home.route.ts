import { Route } from '@angular/router';

export const routeHome = {
  path: '' as const,
  title: 'Home',
  loadComponent: () => import('./home').then((module) => module.Home),
} satisfies Route;
