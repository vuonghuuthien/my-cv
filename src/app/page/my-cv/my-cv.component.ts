import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-my-cv',
  templateUrl: './my-cv.component.html',
  styleUrls: ['./my-cv.component.scss'],
})
export class MyCVComponent {
  imgSrcList = [
    '/assets/cv/CV_1.png',
    '/assets/cv/CV_2.png',
    '/assets/cv/CV_3.png',
  ];
  pdfSrc = '/assets/cv/Thien (David) Vuong Huu  - CV.pdf';

  downloadCV() {
    const link = document.createElement('a');
    link.href = this.pdfSrc;
    link.download = 'Thien (David) Vuong Huu  - CV.pdf';
    link.click();
  }
}
