import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-element',
  templateUrl: './menu-element.component.html',
  styleUrls: ['./menu-element.component.scss'],
})
export class MenuElementComponent {
  @Input() menuPos: number = 1; // 1 Left // 2 Right
  openMenuBranding: boolean = false;
  openMenu: boolean = false;
}
