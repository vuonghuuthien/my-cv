import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-my-cv',
  templateUrl: './my-cv.component.html',
  styleUrls: ['./my-cv.component.scss'],
})
export class MyCVComponent {
  imgSrc = '/assets/cv/MyCV.png';
  pdfSrc = '/assets/cv/MyCV.pdf';

  downloadCV() {
    const link = document.createElement('a');
    link.href = this.pdfSrc;
    link.download = 'MyCV.pdf';
    link.click();
  }
}
