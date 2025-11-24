import { TypedRoute } from '../../typed-route';

const path = 'info';
export const routeInfo = {
  path,
  title: 'Info',
  loadComponent: () => import('./info').then((module) => module.Info),
} satisfies TypedRoute<typeof path>;
