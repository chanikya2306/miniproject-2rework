import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginformComponent } from './LoginForm/loginform/loginform.component';
import { RegisterformComponent } from './RegisterForm/registerform/registerform.component';

const routes: Routes = [
  {path:'LoginForm',component:LoginformComponent},
  {path:'RegisterForm',component:RegisterformComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
