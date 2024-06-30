import { Component, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { AlertType } from '../../enums/alerts.enum';
import { AlertsService } from '../../services/alerts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'shared-toast-alert',
  templateUrl: './toast-alert.component.html',
  styleUrls: ['./toast-alert.component.css'],
})
export class ToastAlertComponent implements OnInit, OnDestroy {
  public title: string = '';
  public message: string = '';
  public showToast: boolean = false;
  public type: AlertType = AlertType.Info;
  private alertSubscription: Subscription = new Subscription();

  constructor(private alertsService: AlertsService) {}

  ngOnInit(): void {
    this.alertSubscription = this.alertsService.alertState.subscribe(
      (alert) => {
        this.title = alert.title;
        this.message = alert.message;
        this.type = alert.type;
        this.showToast = true;
        this.autoHideToast();
      }
    );
  }

  ngOnDestroy(): void {
    if (this.alertSubscription) {
      this.alertSubscription.unsubscribe();
    }
  }

  public get toastClasses() {
    switch (this.type) {
      case 'success':
        return 'bg-green-400 text-white border-l-green-700';
      case 'error':
        return 'bg-red-400 text-white border-l-red-700';
      case 'warning':
        return 'bg-yellow-400 text-white border-l-yellow-700';
      case 'info':
      default:
        return 'bg-blue-400 text-white border-l-info-700';
    }
  }

  public get toastIcons() {
    switch (this.type) {
      case 'success':
        return 'faSolidCircleCheck';
      case 'error':
        return 'faSolidCircleXmark';
      case 'warning':
        return 'faSolidTriangleExclamation';
      case 'info':
      default:
        return 'faSolidCircleExclamation';
    }
  }

  private autoHideToast() {
    setTimeout(() => {
      this.hideToast();
    }, 3000);
  }

  private hideToast() {
    const toastElement = document.querySelector('.toast-enter');
    if (toastElement) {
      toastElement.classList.add('toast-exit');
      toastElement.addEventListener(
        'animationend',
        () => {
          this.showToast = false;
        },
        { once: true }
      );
    } else {
      this.showToast = false;
    }
  }
}
