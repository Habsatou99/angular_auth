import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AjoutEquipementComponent } from './components/ajout-equipement/ajout-equipement.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EquipementEditComponent } from './components/equipement-edit/equipement-edit.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { HomeComponent } from './components/home/home.component';
import { ListeEquipementComponent } from './components/liste-equipement/liste-equipement.component';
import { ListePingComponent } from './components/liste-ping/liste-ping.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'login',component: LoginComponent},
  {path:'logout',component: LogoutComponent},
  {path:'register',component: RegisterComponent},
  {path:'forgot-password',component: ForgotPasswordComponent},
  {path:'reset-password',component: ResetPasswordComponent},
  //{path:'dashboard/:start/:end',component: DashboardComponent},
  {path:'ajout-equipement/:id',component:AjoutEquipementComponent},
  {path:'ajout-equipement',component:AjoutEquipementComponent},
  {path:'liste-equipement',component:ListeEquipementComponent},
  {path:'equipement-edit/:id',component:EquipementEditComponent},
  {path:'liste_ping/:ip_adress',component:ListePingComponent},
  {path:'liste_ping/:id/:ip_adress',component:ListePingComponent},
  {path:'liste_ping/:ip_adress/:id',component:ListePingComponent},
  {path:'dashboard',component: DashboardComponent},


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
