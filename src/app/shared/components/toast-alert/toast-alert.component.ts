import { Component, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { AlertType } from '../../enums/alerts.enum';
import { AlertsService } from '../../services/alerts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'shared-toast-alert',
  templateUrl: './toast-alert.component.html',
  styleUrls: ['./toast-alert.component.css'],
})
export class ToastAlertComponent {}
