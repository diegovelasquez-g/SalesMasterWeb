import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CategoriesService } from '../../../../core/services/categories.service';
import { AlertsService } from '../../../../shared/services/alerts.service';

@Component({
  selector: 'app-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: [],
})
export class CategoriesFormComponent {
  constructor(
    private fb: FormBuilder,
    private categoriesService: CategoriesService,
    private alertsService: AlertsService
  ) {}

  public categoryForm: FormGroup = this.fb.group({
    categoryName: [''],
    description: [''],
  });

  public prueba(): void {
    this.alertsService.addSuccess(
      'Category created!',
      'Category created successfully'
    );
  }

  public onSubmit(): void {
    this.categoriesService.newCategory(this.categoryForm.value).subscribe({
      next: () => {
        console.log('Category created!');
      },
      error: (error) => {
        console.error('Error creating category', error);
      },
    });
  }
}
