import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogoutComponent } from './components/logout/logout.component';
import { AddbookComponent } from './pages/addbook/addbook.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EditbookComponent } from './pages/editbook/editbook.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  {path:'',component:HomeComponent,
      children:[{path:'login',component:LoginComponent},{path:'signup',component:SignupComponent}]},
  {path:'dashboard',component:DashboardComponent, children:[{path:'main',component:MainComponent},{path:'logout',component:LogoutComponent}]},
  {path:'main',component:MainComponent,children:[{path:'dashboard',component:DashboardComponent},{path:'logout',component:LogoutComponent}]},
  {path:'addbook',component:AddbookComponent,children:[{path:'dashboard',component:DashboardComponent},{path:'logout',component:LogoutComponent}]},
  {path:'editbook/:id',component:EditbookComponent,children:[{path:'dashboard',component:DashboardComponent},{path:'logout',component:LogoutComponent}]},
  {path:'logout',component:LogoutComponent}   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
