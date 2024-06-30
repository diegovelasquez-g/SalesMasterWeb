import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Alert } from '../interfaces/alert.inteface';
import { AlertType } from '../enums/alerts.enum';

@Injectable({ providedIn: 'root' })
export class AlertsService {
  private alertSubject = new Subject<Alert>();
  alertState = this.alertSubject.asObservable();
  constructor() {}

  showAlert(title: string, message: string, type: AlertType) {
    this.alertSubject.next({ title, message, type });
  }
}
