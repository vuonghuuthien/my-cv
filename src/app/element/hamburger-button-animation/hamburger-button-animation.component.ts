import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hamburger-button-animation',
  templateUrl: './hamburger-button-animation.component.html',
  styleUrls: ['./hamburger-button-animation.component.scss'],
})
export class HamburgerButtonAnimationComponent {
  @Input() style: number = 1;
  @Input() size: string = '32px';
  @Input() active: boolean = false;
}
