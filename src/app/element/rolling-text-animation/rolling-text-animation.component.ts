import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rolling-text-animation',
  templateUrl: './rolling-text-animation.component.html',
  styleUrls: ['./rolling-text-animation.component.scss']
})
export class RollingTextAnimationComponent {
  @Input() style = 1;
}
