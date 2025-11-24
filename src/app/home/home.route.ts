import { TypedRoute } from '../typed-route';

const path = '';
export const routeHome = {
  path,
  title: 'Home',
  loadComponent: () => import('./home').then((module) => module.Home),
} satisfies TypedRoute<typeof path>;
