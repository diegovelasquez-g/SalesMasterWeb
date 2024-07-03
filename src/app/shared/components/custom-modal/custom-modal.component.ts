import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ModalsService } from '../../services/modals.service';

@Component({
  selector: 'shared-custom-modal',
  templateUrl: './custom-modal.component.html',
  styles: [],
})
export class CustomModalComponent implements OnInit, OnDestroy {
  isVisible!: boolean;
  content$!: Observable<any>;
  title$!: Observable<string>;
  private subscription!: Subscription;

  constructor(private modalService: ModalsService) {}

  ngOnInit() {
    this.content$ = this.modalService.modalContent$;
    this.title$ = this.modalService.modalTitle$;
    this.subscription = this.modalService.modalVisibility$.subscribe(
      (isVisible) => (this.isVisible = isVisible)
    );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  public closeModal() {
    this.modalService.closeModal();
  }
}
