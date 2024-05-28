import { Component, Output, EventEmitter, HostListener, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-tab-role-element',
  templateUrl: './tab-role-element.component.html',
  styleUrls: ['./tab-role-element.component.scss'],
})
export class TabRoleElementComponent implements OnInit, OnDestroy {
  @Output() output_style = new EventEmitter<number>();

  tabItems = [
    {
      label: 'ux/ui designer',
      icon: '/assets/skills/Designer-Role.svg',
      style: 1,
      active: true,
    },
    {
      label: 'full-stack developer',
      icon: '/assets/skills/Developer-Role.svg',
      style: 2,
      active: false,
    },
    {
      label: 'front-end animator',
      icon: '/assets/skills/Animator-Role.svg',
      style: 3,
      active: false,
    },
  ];

  underlineStyle = {};

  ngOnInit() {
    window.addEventListener('resize', this.onResize.bind(this));
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.onResize.bind(this));
  }

  onResize() {
    const activeItem = this.tabItems.find((item) => item.active);
    if (activeItem) {
      this.updateUnderlineStyle(activeItem);
    }
  }

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
          width: `${activeLink_Rect.width}px`,
          left: `${activeLink_Rect.left - navbar_Rect.left}px`,
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
