import { Routes } from '@angular/router';
import { routeProduct } from './product/product.route';
import { routeHome } from './home/home.route';
import { routeTeam } from './team/team.route';

export const routes: Routes = [routeHome, routeProduct, routeTeam];
