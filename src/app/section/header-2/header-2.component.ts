import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header-2',
  templateUrl: './header-2.component.html',
  styleUrls: ['./header-2.component.scss'],
})
export class Header2Component {
  @Output() output_style = new EventEmitter<number>();

  tabItems = [
    { label: 'ux/ui designer', style: 1, active: true },
    { label: 'full-stack developer', style: 2, active: false },
    { label: 'front-end animator', style: 3, active: false },
  ];

  underlineStyle = {};

  openMenuBranding: boolean = false;
  openMenu: boolean = false;

  setActive(item: any) {
    this.tabItems.forEach((i) => (i.active = false));
    item.active = true;
    this.updateUnderlineStyle(item);
    this.sendStyle(item.style);
  }

  private updateUnderlineStyle(item: any) {
    setTimeout(() => {
      const activeLink = document.querySelector('.tabs .tab.active');
      const navbar = document.querySelector('.tabs');

      if (activeLink && navbar) {
        const activeLink_Rect = activeLink.getBoundingClientRect();
        const navbar_Rect = navbar.getBoundingClientRect();

        this.underlineStyle = {
          width: `${activeLink_Rect.width + 3}px`,
          left: `${activeLink_Rect.left - navbar_Rect.left - 1}px`,
        };
      }
    }, 0); // Delay to ensure DOM update
  }

  ngAfterViewInit() {
    const activeItem = this.tabItems.find((item) => item.active);
    if (activeItem) {
      this.updateUnderlineStyle(activeItem);
      this.sendStyle(activeItem.style);
    }
  }

  sendStyle(style: number) {
    this.output_style.emit(style);
  }
}
