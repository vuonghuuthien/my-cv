import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-section',
  templateUrl: './footer-section.component.html',
  styleUrls: ['./footer-section.component.scss']
})
export class FooterSectionComponent {
  socials = [
    {
      link: 'https://www.figma.com/@vuonghuuthien',
      icon: '/assets/socials/figma.svg'
    },
    {
      link: 'https://www.linkedin.com/in/vuong-huu-thien/',
      icon: '/assets/socials/linkedin.svg'
    },
    {
      link: 'https://www.behance.net/vuong_huu_thien',
      icon: '/assets/socials/behance.svg'
    },
    {
      link: 'https://dribbble.com/vuong_huu_thien',
      icon: '/assets/socials/dribbble.svg'
    },
    {
      link: 'https://x.com/vuong_huu_thien',
      icon: '/assets/socials/x.svg'
    }
  ];
}
