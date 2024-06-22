import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { LoginResponse } from '../../features/auth/interfaces/loginResponse.interface';
import { HttpClient } from '@angular/common/http';
import { LoginRequest } from '../../features/auth/interfaces/loginRequest.interface';
import { EmployeeInfo } from '../../shared/interfaces/employeeInfo.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'https://localhost:7082/api/Employees/';
  private employee?: EmployeeInfo;

  public login(loginRequest: LoginRequest): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>(`${this.baseUrl}auth`, loginRequest)
      .pipe(
        tap((response) => localStorage.setItem('token', response.token)),
        tap((response) =>
          localStorage.setItem('refresToken', response.refreshToken)
        ),
        tap((response) =>
          localStorage.setItem('employeeId', response.employeeId)
        )
      );
  }

  public checkAuthentication(): Observable<boolean> {
    if (
      !!localStorage.getItem('token') &&
      !!localStorage.getItem('refreshToken') &&
      !!localStorage.getItem('employeeId')
    )
      return of(false);

    const employeeId = localStorage.getItem('employeeId');

    return this.http
      .get<EmployeeInfo>(`${this.baseUrl}employeeInfo?employeeId=${employeeId}`)
      .pipe(
        tap((employee) => (this.employee = employee)),
        map((employee) => !!employee),
        catchError(() => of(false))
      );
  }
}
