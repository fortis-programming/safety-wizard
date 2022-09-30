import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PersonalInformationComponent } from './sign-up/personal-information/personal-information.component';
import { AccountInformationComponent } from './sign-up/account-information/account-information.component';
import { PasswordSetupComponent } from './sign-up/password-setup/password-setup.component';
import { HomeComponent } from './home/home.component';
import { ActivityComponent } from './activity/activity.component';
import { HealthCheckComponent } from './health-check/health-check.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    PersonalInformationComponent,
    AccountInformationComponent,
    PasswordSetupComponent,
    HomeComponent,
    ActivityComponent,
    HealthCheckComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
