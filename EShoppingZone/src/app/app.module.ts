import { NgModule ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShareService } from './Services/share.service';
import { HomeComponent } from './Component/home/home.component';
import { Router, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { FooterComponent } from './Component/footer/footer.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './Component/login/login.component';
import { SignUpComponent } from './Component/sign-up/sign-up.component';
import { UserLandingPageComponent } from './Component/user-landing-page/user-landing-page.component';
import { Authentication } from './Services/authentication';



@NgModule({
  declarations: [
    AppComponent,
   
    HomeComponent,
   
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    SignUpComponent,
    UserLandingPageComponent,
     
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'login', component: LoginComponent},
      {path: 'sign-up', component: SignUpComponent},
      
      
    ]),
    HttpClientModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [ShareService,Authentication ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
