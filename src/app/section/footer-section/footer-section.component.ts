import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-section',
  templateUrl: './footer-section.component.html',
  styleUrls: ['./footer-section.component.scss']
})
export class FooterSectionComponent {
  socials = [
    {
      title: "Figma",
      link: 'https://www.figma.com/@vuonghuuthien',
      icon: '/assets/socials/figma.svg'
    },
    {
      title: "LinkedIn",
      link: 'https://www.linkedin.com/in/vuong-huu-thien/',
      icon: '/assets/socials/linkedin.svg'
    },
    {
      title: "Behance",
      link: 'https://www.behance.net/vuong_huu_thien',
      icon: '/assets/socials/behance.svg'
    },
    {
      title: "Dribbble",
      link: 'https://dribbble.com/vuong_huu_thien',
      icon: '/assets/socials/dribbble.svg'
    },
    {
      title: "X",
      link: 'https://x.com/vuong_huu_thien',
      icon: '/assets/socials/x.svg'
    }
  ];

  email = "vuonghuuthientk@gmail.com";
  phone = "(+84)905045730";

  copyText(text: string): void {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('Đã sao chép vào clipboard!');
  }
}
