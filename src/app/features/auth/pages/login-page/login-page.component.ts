import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../../core/services/auth.service';
import { Router } from '@angular/router';
import { ValidatorsService } from '../../../../shared/services/validators.service';
import { AlertType } from '../../../../shared/enums/alerts.enum';
import { AlertsService } from '../../../../shared/services/alerts.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: ``,
})
export class LoginPageComponent {
  constructor(
    private fB: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private validatorsService: ValidatorsService,
    private alertsService: AlertsService
  ) {}

  public isLoading: boolean = false;

  public isValidField(field: string): boolean | null {
    return this.validatorsService.isValidField(this.loginForm, field);
  }

  public getFieldError(field: string): string | null {
    return this.validatorsService.getFieldError(this.loginForm, field);
  }

  public loginForm: FormGroup = this.fB.group({
    email: [
      '',
      [
        Validators.required,
        Validators.pattern(this.validatorsService.emailPattern),
      ],
    ],
    password: ['', [Validators.required]],
  });

  public onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    this.isLoading = true;
    this.authService.login(this.loginForm.value).subscribe({
      next: (response) => {
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        this.alertsService.showAlert(
          'Something went wrong!',
          'Please check your credentials and try again.',
          AlertType.Error
        );
        this.isLoading = false;
      },
    });
  }
}
