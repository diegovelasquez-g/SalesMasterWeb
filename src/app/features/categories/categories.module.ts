import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesPageComponent } from './pages/categories-page/categories-page.component';
import { RouterModule } from '@angular/router';
import { CategoriesRoutingModule } from './categories-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { NgIconsModule } from '@ng-icons/core';
import { bootstrapPlusLg } from '@ng-icons/bootstrap-icons';
import { CategoriesFormComponent } from './components/categories-form/categories-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CategoriesPageComponent, CategoriesFormComponent],
  imports: [
    CommonModule,
    RouterModule,
    CategoriesRoutingModule,
    SharedModule,
    NgIconsModule.withIcons({ bootstrapPlusLg }),
    ReactiveFormsModule,
  ],
})
export class CategoriesModule {}
