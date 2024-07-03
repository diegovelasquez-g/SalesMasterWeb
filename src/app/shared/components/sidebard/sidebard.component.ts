import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'shared-sidebard',
  templateUrl: './sidebard.component.html',
  styles: ``,
  animations: [
    trigger('dropdownAnimation', [
      state(
        'void',
        style({
          height: '0',
          overflow: 'hidden',
          opacity: 0,
        })
      ),
      state(
        '*',
        style({
          height: '*',
          overflow: 'hidden',
          opacity: 1,
        })
      ),
      transition('void <=> *', animate('300ms ease')),
    ]),
  ],
})
export class SidebardComponent {
  public showProductsDropdown: boolean = false;

  public toggleProductsDropdown() {
    this.showProductsDropdown = !this.showProductsDropdown;
  }
}
