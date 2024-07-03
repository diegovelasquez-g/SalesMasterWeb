import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastAlertComponent } from './components/toast-alert/toast-alert.component';
import { SidebardComponent } from './components/sidebard/sidebard.component';
import { CustomModalComponent } from './components/custom-modal/custom-modal.component';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { RouterModule } from '@angular/router';
import { MenubarComponent } from './components/menubar/menubar.component';
import { AvatarModule } from 'primeng/avatar';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { SidebarModule } from 'primeng/sidebar';

@NgModule({
  declarations: [
    ToastAlertComponent,
    SidebardComponent,
    CustomModalComponent,
    MenubarComponent,
  ],
  imports: [
    CommonModule,
    DialogModule,
    ToastModule,
    ButtonModule,
    DropdownModule,
    RouterModule,
    AvatarModule,
    BreadcrumbModule,
    SidebarModule,
  ],
  exports: [
    ToastAlertComponent,
    SidebardComponent,
    CustomModalComponent,
    MenubarComponent,
  ],
})
export class SharedModule {}
