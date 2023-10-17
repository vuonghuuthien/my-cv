import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bg-bubbles',
  templateUrl: './bg-bubbles.component.html',
  styleUrls: ['./bg-bubbles.component.scss']
})
export class BgBubblesComponent {
  @Input() text: string = 'David';
  @Input() width: string = '250px';
  @Input() height: string = '400px';
}
