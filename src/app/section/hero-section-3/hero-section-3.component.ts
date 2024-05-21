import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-section-3',
  templateUrl: './hero-section-3.component.html',
  styleUrls: ['./hero-section-3.component.scss'],
})
export class HeroSection3Component {
  @Input() style: number = 1;

  changeContents = [
    { ye: '4+ Year of experience as a UX/UI designer', style: 1 },
    { ye: '3+ Year of experience as a Full-stack developer', style: 2 },
    { ye: '1+ Year of experience as a Front-end animator', style: 3 },
  ];

  getYE() {
    const item = this.changeContents.find((item) => item.style === this.style);
    if (item && item.ye) {
      return item.ye;
    }
    return '';
  }
}
