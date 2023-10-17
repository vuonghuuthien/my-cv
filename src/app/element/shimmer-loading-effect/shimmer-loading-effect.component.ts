import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shimmer-loading-effect',
  templateUrl: './shimmer-loading-effect.component.html',
  styleUrls: ['./shimmer-loading-effect.component.scss']
})
export class ShimmerLoadingEffectComponent {
  @Input() speed: string = '2.5s';
  @Input() width: string = '100px';
  @Input() height: string = '35px';
}
