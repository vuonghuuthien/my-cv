import { Component } from '@angular/core';

@Component({
  selector: 'app-left-bar-section',
  templateUrl: './left-bar-section.component.html',
  styleUrls: ['./left-bar-section.component.scss'],
})
export class LeftBarSectionComponent {
  socials = [{ label: 'fb' }, { label: 'be' }, { label: 'in' }];

  roles = [
    { label: 'designer' },
    { label: 'developer' },
    { label: 'animator' },
  ];

  socials_icon = [
    {
      title: 'LinkedIn',
      link: 'https://www.linkedin.com/in/vuong-huu-thien/',
      icon: '/assets/socials/LinkedIn2.svg',
    },
    {
      title: 'Behance',
      link: 'https://www.behance.net/vuong_huu_thien',
      icon: '/assets/socials/Behance2.svg',
    },
    {
      title: 'Figma',
      link: 'https://www.figma.com/@vuonghuuthien',
      icon: '/assets/socials/Figma2.svg',
    },
    {
      title: 'Dribbble',
      link: 'https://dribbble.com/vuong_huu_thien',
      icon: '/assets/socials/Dribbble2.svg',
    },
    {
      title: 'X',
      link: 'https://x.com/vuong_huu_thien',
      icon: '/assets/socials/X2.svg',
    },
  ];
}
