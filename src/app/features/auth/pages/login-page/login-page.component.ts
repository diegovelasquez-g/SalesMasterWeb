import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: ``,
})
export class LoginPageComponent {
  constructor(
    private fB: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  // public loginForm: FormGroup = new FormGroup({
  //   userName: new FormControl(''),
  //   password: new FormControl(''),
  // });

  public loginForm: FormGroup = this.fB.group({
    email: [''],
    password: [''],
  });

  onSubmit(): void {
    this.authService.login(this.loginForm.value).subscribe((response) => {
      this.router.navigate(['/dashboard']);
    });
  }
}
