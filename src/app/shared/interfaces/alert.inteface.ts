import { AlertType } from '../enums/alerts.enum';

export interface Alert {
  title: string;
  message: string;
  type: AlertType;
}
