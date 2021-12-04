import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { AlljobsComponent } from './alljobs/alljobs.component';
import { CompaniesComponent } from './companies/companies.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { WalkinComponent } from './walkin/walkin.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'walkin',component:WalkinComponent},
  {path:'account',component:AccountComponent,children:[
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent}
  ]},
  {path:'alljobs',component:AlljobsComponent},
  {path:'companies',component:CompaniesComponent},
  {path:'',redirectTo:'home',pathMatch:"full"},
  {path:"**",component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
