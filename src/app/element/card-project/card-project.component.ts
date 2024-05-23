import { Component, Input, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.scss'],
})
export class CardProjectComponent implements AfterViewInit {
  @Input() company: string = 'NOIS - 2023';
  @Input() name: string = 'Onboarding System 2';
  @Input() chips: string[] = [
    'User Research',
    'User Experience',
    'User Interface',
  ];
  @Input() description: string =
    'A software solution designed for multinational corporations to manage, guide, and evaluate employees across various offices worldwide.';
  @Input() buttonTitle: string = 'Explore';
  @Input() buttonArrow: number = 1;
  @Input() background: string = '/assets/backgrounds/OS2.png';
  @Input() color: string = '#6366f1';

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    const card = this.elementRef.nativeElement.querySelector('#card');
    const chips = this.elementRef.nativeElement.querySelectorAll('.chip');
    const button = this.elementRef.nativeElement.querySelector('#button');
    if (card) {
      card.style.backgroundColor = this.hexToRgba(this.color, 0.1);
    }
    chips.forEach((chip: HTMLElement) => {
      chip.style.backgroundColor = this.hexToRgba(this.color, 0.2);
    });
    if (button) {
      button.style.backgroundColor = this.hexToRgba(this.color, 1);
    }
  }

  hexToRgba(hex: string, alpha: number): string {
    // Chuyển đổi màu hex sang màu rgba với độ trong suốt
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (result) {
      const r = parseInt(result[1], 16);
      const g = parseInt(result[2], 16);
      const b = parseInt(result[3], 16);
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }
    return `rgba(0, 0, 0, ${alpha})`; // Mặc định là màu đen nếu màu hex không hợp lệ
  }
}
