import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { AddbookComponent } from './pages/addbook/addbook.component';
import { EditbookComponent } from './pages/editbook/editbook.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LogoutComponent } from './components/logout/logout.component';
import { MainComponent } from './pages/main/main.component';

import { ApiService } from './api.service';
import { HeadernavComponent } from './components/headernav/headernav.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    AddbookComponent,
    EditbookComponent,
    DashboardComponent,
    LogoutComponent,
    MainComponent,
    HeadernavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
