import { Component } from '@angular/core';

@Component({
  selector: 'app-work-page',
  templateUrl: './work-page.component.html',
  styleUrls: ['./work-page.component.scss'],
})
export class WorkPageComponent {
  style: number = 1;

  setStyle(style: number) {
    this.style = style;
  }
}
