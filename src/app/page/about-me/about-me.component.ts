import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  images = [
    "/assets/images/thien.jpg",
    "/assets/images/avatar.jpg",
    "/assets/images/my-image.jpg",
  ]
}
