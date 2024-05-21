import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  style: number = 1;

  setStyle(style: number) {
    this.style = style;
  }
}
