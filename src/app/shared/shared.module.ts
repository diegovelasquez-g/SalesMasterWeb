import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastAlertComponent } from './components/toast-alert/toast-alert.component';
import { NgIconsModule } from '@ng-icons/core';
import {
  faSolidCircleCheck,
  faSolidCircleExclamation,
  faSolidCircleXmark,
  faSolidHouse,
  faSolidTriangleExclamation,
} from '@ng-icons/font-awesome/solid';
import { faChartBar } from '@ng-icons/font-awesome/regular';
import { SidebardComponent } from './components/sidebard/sidebard.component';
import {
  bootstrapBoxSeam,
  bootstrapBoxes,
  bootstrapChevronDown,
  bootstrapChevronUp,
  bootstrapPieChart,
} from '@ng-icons/bootstrap-icons';

@NgModule({
  declarations: [ToastAlertComponent, SidebardComponent],
  imports: [
    CommonModule,
    NgIconsModule.withIcons({
      faSolidCircleCheck,
      faSolidCircleExclamation,
      faSolidCircleXmark,
      faSolidTriangleExclamation,
      faSolidHouse,
      faChartBar,
      bootstrapPieChart,
      bootstrapBoxSeam,
      bootstrapBoxes,
      bootstrapChevronDown,
      bootstrapChevronUp,
    }),
  ],
  exports: [ToastAlertComponent, SidebardComponent],
})
export class SharedModule {}
