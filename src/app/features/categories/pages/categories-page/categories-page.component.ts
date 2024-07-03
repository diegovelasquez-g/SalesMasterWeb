import { Component, OnInit } from '@angular/core';
import { ModalsService } from '../../../../shared/services/modals.service';
import { CategoriesFormComponent } from '../../components/categories-form/categories-form.component';
import { CategoriesService } from '../../../../core/services/categories.service';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styles: ``,
})
export class CategoriesPageComponent implements OnInit {
  constructor(
    private modalService: ModalsService,
    private categoriesService: CategoriesService
  ) {}
  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe({
      next: (categories) => {
        console.log(categories);
      },
      error: (error) => {
        console.error('Error getting categories', error);
      },
    });
  }
  public openNewCategoryModal() {
    this.modalService.openModal(CategoriesFormComponent, 'New Category');
  }
  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }
}
