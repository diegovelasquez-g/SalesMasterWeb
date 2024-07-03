import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menubar',
  templateUrl: './menubar.component.html',
  styles: ``,
})
export class MenubarComponent implements OnInit {
  items: MenuItem[] = [];

  constructor() {}

  ngOnInit() {
    this.items = [
      { label: 'Dashboard', url: '/dashboard' },
      { label: 'Products', url: '/products' },
      { label: 'Categories', url: '/categories' },
    ];
  }
}
