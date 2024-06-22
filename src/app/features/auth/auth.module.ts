import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ResetPasswordPageComponent } from './pages/reset-password-page/reset-password-page.component';
import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthLayoutPageComponent } from './pages/auth-layout-page/auth-layout-page.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginPageComponent,
    ResetPasswordPageComponent,
    AuthLayoutPageComponent,
  ],
  imports: [CommonModule, RouterModule, AuthRoutingModule, ReactiveFormsModule],
})
export class AuthModule {}
