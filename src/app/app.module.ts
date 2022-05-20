import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './Authentication/authentication/authentication.component';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { ErrormsgDirective } from './CustomDiredctive/errormsg.directive';
import { InputComponent } from './Dashboard/Datatransfer/Input/input/input.component';
import { OutputComponent } from './Dashboard/Datatransfer/Output/output/output.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    DashboardComponent,
    ErrormsgDirective,
    InputComponent,
    OutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  schemas:[NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
