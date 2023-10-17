import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slider-animation',
  templateUrl: './slider-animation.component.html',
  styleUrls: ['./slider-animation.component.scss']
})
export class SliderAnimationComponent {
  @Input() speed: string = '0.4s';
  @Input() width: string = '300px';
  @Input() height: string = '100px';
}
