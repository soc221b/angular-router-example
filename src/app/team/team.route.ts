import { Route } from '@angular/router';
import { routeUser } from './user/user.route';

export const routeTeam = {
  path: 'team/:teamId' as const,
  title: 'Team',
  loadComponent: () => import('./team').then((module) => module.Team),
  children: [routeUser],
} satisfies Route;
