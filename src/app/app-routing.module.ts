import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule'
  }, {
    path: 'home',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  }, {
    path: 'users',
    loadChildren: './users/users.module#UsersModule'
  }, {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
