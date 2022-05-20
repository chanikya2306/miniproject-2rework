import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginformComponent } from './LoginForm/loginform/loginform.component';
import { RegisterformComponent } from './RegisterForm/registerform/registerform.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginformComponent,
    RegisterformComponent,
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FormsModule
  ]
})
export class AuthenticationModule { }
