import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-checkbox-circle-animation-pro',
  templateUrl: './checkbox-circle-animation-pro.component.html',
  styleUrls: ['./checkbox-circle-animation-pro.component.scss']
})
export class CheckboxCircleAnimationProComponent {
  @Input() color: string = '#F0F0F0';
  @Input() color_checked: string = 'linear-gradient(to right, #a0fe56, #45c954)';
  @Input() color_check: string = '#45C954';
  @Input() speed: string = '0.2s';
  @Input() size: string = '80px';
  @Input() border_size: string = '10px';
  @Input() width_check: string = '35px';
  @Input() height_check: string = '65px';
  @Input() border_check_size: string = '12px';
  @Input() border_check_radius: string = '2px';
}
