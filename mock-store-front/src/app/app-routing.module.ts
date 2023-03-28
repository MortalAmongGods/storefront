import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LogInComponent } from './log-in/log-in.component';
import { UserCartComponent } from './user-cart/user-cart.component';

const routes: Routes = [
  { path: 'Home', component: HomePageComponent },
  { path: 'MyCart', component: UserCartComponent },
  { path: 'LogIn', component: LogInComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
