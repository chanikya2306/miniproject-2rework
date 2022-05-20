import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './Footer/footer/footer.component';
import { HeaderComponent } from './Header/header/header.component';
import { MainpageComponent } from './MainPage/mainpage/mainpage.component';

const routes: Routes = [
  {path:"Header",component:HeaderComponent},
  {path:"MainPage",component:MainpageComponent},
  {path:"Footer",component:FooterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
