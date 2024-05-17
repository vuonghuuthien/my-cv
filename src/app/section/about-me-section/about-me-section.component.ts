import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me-section',
  templateUrl: './about-me-section.component.html',
  styleUrls: ['./about-me-section.component.scss'],
})
export class AboutMeSectionComponent {
  roleList = [
    {
      linkAvatar: '/assets/images/Avatar.jpg',
      contentTitle: 'Full-Stack Developer',
      contentExperience: '3+ Year Experience',
      contentDescription:
        'I build and maintain both the front-end and back-end of web applications, ensuring seamless integration and functionality.',
      skillList: [
        '/assets/skills/Angular.svg',
        '/assets/skills/DotNet.svg',
        '/assets/skills/ReactJS.svg',
        '/assets/skills/NodeJS.svg',
      ],
    },
    {
      linkAvatar: '/assets/images/Avatar.jpg',
      contentTitle: 'UX/UI Designer',
      contentExperience: '4+ Year Experience',
      contentDescription:
        'I create intuitive and visually appealing interfaces that enhance user interaction and satisfaction with digital products.',
      skillList: [
        '/assets/skills/Figma.svg',
        '/assets/skills/Sketch.svg',
        '/assets/skills/XD.svg',
        '/assets/skills/Photoshop.svg',
        '/assets/skills/Illustrator.svg',
        '/assets/skills/Miro.svg',
      ],
    },
    {
      linkAvatar: '/assets/images/Avatar.jpg',
      contentTitle: 'Front-End Animator',
      contentExperience: '1+ Year Experience',
      contentDescription:
        'I design and implement engaging animations for websites, enhancing user interaction and visual appeal.',
      skillList: [
        '/assets/skills/HTML.svg',
        '/assets/skills/CSS.svg',
        '/assets/skills/JS.svg',
        '/assets/skills/JQuery.svg',
        '/assets/skills/SCSS.svg',
      ],
    },
  ];
}
