import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/ocasiones/ocasiones.component').then(m => m.OcasionesComponent) }
];
