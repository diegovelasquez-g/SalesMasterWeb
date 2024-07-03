import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalsService {
  private modalVisibilitySubject = new BehaviorSubject<boolean>(false);
  modalVisibility$ = this.modalVisibilitySubject.asObservable();

  private modalContentSubject = new BehaviorSubject<any>(null);
  modalContent$ = this.modalContentSubject.asObservable();

  private modalTitleSubject = new BehaviorSubject<string>('Default Title');
  modalTitle$ = this.modalTitleSubject.asObservable();

  openModal(content: any, title: string = 'Default Title') {
    this.modalContentSubject.next(content);
    this.modalTitleSubject.next(title);
    this.modalVisibilitySubject.next(true);
  }

  closeModal() {
    this.modalVisibilitySubject.next(false);
  }
}
