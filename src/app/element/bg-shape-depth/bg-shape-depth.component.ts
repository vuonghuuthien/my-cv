import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bg-shape-depth',
  templateUrl: './bg-shape-depth.component.html',
  styleUrls: ['./bg-shape-depth.component.scss']
})
export class BgShapeDepthComponent {
  @Input() style: number = 1;
}
