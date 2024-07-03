import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Alert } from '../interfaces/alert.inteface';
import { AlertType } from '../enums/alerts.enum';
import { MessageService } from 'primeng/api';

@Injectable({ providedIn: 'root' })
export class AlertsService {
  constructor(private messageService: MessageService) {}

  addSuccess(summary: string, detail: string) {
    this.messageService.add({ severity: 'success', summary, detail });
  }

  addInfo(summary: string, detail: string) {
    this.messageService.add({ severity: 'info', summary, detail });
  }

  addWarn(summary: string, detail: string) {
    this.messageService.add({ severity: 'warn', summary, detail });
  }

  addError(summary: string, detail: string) {
    this.messageService.add({ severity: 'error', summary, detail });
  }

  clear() {
    this.messageService.clear();
  }
}
