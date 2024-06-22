import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ResetPasswordPageComponent } from './pages/reset-password-page/reset-password-page.component';
import { AuthLayoutPageComponent } from './pages/auth-layout-page/auth-layout-page.component';

const routes: Routes = [
  {
    path: '',
    component: AuthLayoutPageComponent,
    children: [
      {
        path: 'login',
        component: LoginPageComponent,
      },
      {
        path: 'reset-password',
        component: ResetPasswordPageComponent,
      },
      {
        path: '**',
        redirectTo: 'login',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
