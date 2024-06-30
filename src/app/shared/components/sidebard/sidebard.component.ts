import { Component } from '@angular/core';

@Component({
  selector: 'shared-sidebard',
  templateUrl: './sidebard.component.html',
  styles: ``,
})
export class SidebardComponent {
  public showProductsDropdown: boolean = false;

  public toggleProductsDropdown() {
    this.showProductsDropdown = !this.showProductsDropdown;
  }
}
