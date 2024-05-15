import {
  Component,
  AfterViewInit,
  Renderer2,
  ElementRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements AfterViewInit {
  menuItems = [
    { label: 'overview', link: '#overview', active: true },
    { label: 'about me', link: '#about-me', active: false },
    { label: 'my work', link: '#my-work', active: false },
    { label: 'contact me', link: '#contact-me', active: false },
  ];

  underlineStyle = {
    width: '0px',
    left: '0px',
  };

  @ViewChild('underline', { static: false }) underline!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.updateUnderline();
  }

  setActive(menuItem: { label: string, link: string, active: boolean }) {
    this.menuItems.forEach(item => item.active = false);
    menuItem.active = true;
    this.updateUnderline();
  }

  updateUnderline() {
    setTimeout(() => {
      const activeLink = document.querySelector('.menu a.active');
      const navbar = document.querySelector('.menu');

      if (activeLink && navbar) {
        const linkWidth = activeLink.getBoundingClientRect().width + 3;
        const linkLeft = activeLink.getBoundingClientRect().left - 1;
        const navbarLeft = navbar.getBoundingClientRect().left;

        this.renderer.setStyle(
          this.underline.nativeElement,
          'width',
          `${linkWidth}px`
        );
        this.renderer.setStyle(
          this.underline.nativeElement,
          'left',
          `${linkLeft - navbarLeft}px`
        );
      }
    }, 0); // Delay to ensure DOM update
  }
}
