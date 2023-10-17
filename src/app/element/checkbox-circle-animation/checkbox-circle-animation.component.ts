import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-checkbox-circle-animation',
  templateUrl: './checkbox-circle-animation.component.html',
  styleUrls: ['./checkbox-circle-animation.component.scss']
})
export class CheckboxCircleAnimationComponent {
  @Input() color: string = '#A0FE56';
  @Input() color_checked: string = '#45C954';
  @Input() speed: string = '0.2s';
  @Input() size: string = '90px';
  @Input() border_size: string = '15px';
  @Input() width_check: string = '70px';
  @Input() height_check: string = '35px';
}
