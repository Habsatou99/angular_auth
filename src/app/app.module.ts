import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AjoutEquipementComponent } from './components/ajout-equipement/ajout-equipement.component';
import { ListeEquipementComponent } from './components/liste-equipement/liste-equipement.component';
import { FormsModule } from '@angular/forms';
import { EquipementEditComponent } from './components/equipement-edit/equipement-edit.component';
import { ListePingComponent } from './components/liste-ping/liste-ping.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonToggleModule } from '@angular/material/button-toggle';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    HomeComponent,
    DashboardComponent,
    LogoutComponent,
    AjoutEquipementComponent,
    ListeEquipementComponent,
    EquipementEditComponent,
    ListePingComponent,
  
    
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatCardModule,
    MatDatepickerModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
