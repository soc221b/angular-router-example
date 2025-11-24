import { TypedRoute } from '../typed-route';
import { routeUser } from './user/user.route';

const path = 'team/:teamId';
export const routeTeam = {
  path,
  title: 'Team',
  loadComponent: () => import('./team').then((module) => module.Team),
  children: [routeUser],
} satisfies TypedRoute<typeof path>;
