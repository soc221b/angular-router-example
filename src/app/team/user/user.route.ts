import { TypedRoute } from '../../typed-route';

const path = 'user/:userId';
export const routeUser = {
  path,
  title: 'User',
  loadComponent: () => import('./user').then((module) => module.User),
} satisfies TypedRoute<typeof path>;
