import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { AlljobsComponent } from './alljobs/alljobs.component';
import { CompaniesComponent } from './companies/companies.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { WalkinComponent } from './walkin/walkin.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    AlljobsComponent,
    CompaniesComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    PagenotfoundComponent,
    HomeComponent,
    WalkinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
