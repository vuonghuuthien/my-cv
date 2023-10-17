import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-box-animation',
  templateUrl: './box-animation.component.html',
  styleUrls: ['./box-animation.component.scss']
})
export class BoxAnimationComponent {
  @Input() speed: string = '1s';
  @Input() width: string = '300px';
  @Input() height: string = '200px';
  @Input() depth: string = '100px';
  selection = "show-front";
}
