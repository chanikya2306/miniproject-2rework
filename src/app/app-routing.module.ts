import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './Authentication/authentication/authentication.component';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';

const routes: Routes = [
  {path:'',component:AuthenticationComponent},
  {path:'',loadChildren:() => import('./Authentication/authentication/authentication.module').then(m => m.AuthenticationModule)},
  {path:'Dashboard',component:DashboardComponent},
  {path:'Dashboard',loadChildren:() => import('./Dashboard/dashboard/dashboard.module').then(m => m.DashboardModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
