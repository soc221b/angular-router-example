import { TypedRoute } from '../../typed-route';

const path = 'review';
export const routeReview = {
  path,
  title: 'Review',
  loadComponent: () => import('./review').then((module) => module.Review),
} satisfies TypedRoute<typeof path>;
