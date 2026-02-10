import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', loadComponent: () => import('./component/login/login.component').then(m => m.LoginComponent) },
    { path: 'signup', loadComponent: () => import('./component/register/register.component').then(m => m.RegisterComponent) },
    { path: 'dashboard', loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent) }
];
