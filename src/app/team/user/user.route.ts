import { Route } from '@angular/router';

export const routeUser = {
  path: 'user/:userId' as const,
  title: 'User',
  loadComponent: () => import('./user').then((module) => module.User),
} satisfies Route;
