import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { HomeComponent } from './home/home.component';
import { RetailerLoginComponent } from './retailer-login/retailer-login.component';
import { SearchComponent } from './search/search.component';
import { UserloginComponent } from './userlogin/userlogin.component';

const routes: Routes = [
  {path:'search',component:SearchComponent},
  {path:'alogin',component:AdminloginComponent},
  {path:'user',component:UserloginComponent},
  {path:'rlogin',component:RetailerLoginComponent},
  {path:'home',component:HomeComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
