import { Component, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements AfterViewInit {
  menuItems = [
    { label: 'overview', link: '#overview', active: true },
    { label: 'my work', link: '#my-work', active: false },
    { label: 'about me', link: '#about-me', active: false },
    { label: 'contact me', link: '#contact-me', active: false },
  ];

  underlineStyle = {};

  setActive(item: any) {
    this.menuItems.forEach((i) => (i.active = false));
    item.active = true;
    this.updateUnderlineStyle(item);
  }

  updateUnderlineStyle(item: any) {
    setTimeout(() => {
      const activeLink = document.querySelector('.menu a.active');
      const navbar = document.querySelector('.menu');

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

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.menuItems.forEach((item) => {
      const section = document.querySelector(item.link);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
          this.setActive(item);
        }
      }
    });
  }

  ngAfterViewInit() {
    const activeItem = this.menuItems.find((item) => item.active);
    if (activeItem) {
      this.updateUnderlineStyle(activeItem);
    }
  }
}
