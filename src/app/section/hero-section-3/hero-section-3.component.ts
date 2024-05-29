import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-section-3',
  templateUrl: './hero-section-3.component.html',
  styleUrls: ['./hero-section-3.component.scss'],
})
export class HeroSection3Component {
  @Input() style: number = 1;

  changeContents = [
    { ye: '4+', role: "UX/UI designer", style: 1 },
    { ye: '3+', role: "Full-stack developer", style: 2 },
    { ye: '1+', role: "Front-end animator", style: 3 },
  ];
}
