import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HeaderComponent } from './Header/header/header.component';
import { MainpageComponent } from './MainPage/mainpage/mainpage.component';
import { FooterComponent } from './Footer/footer/footer.component';


@NgModule({
  declarations: [
    HeaderComponent,
    MainpageComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  // schemas:[NO_ERRORS_SCHEMA],
})
export class DashboardModule { }
