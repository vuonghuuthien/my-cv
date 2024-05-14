import { Component, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-slider-card-info-animation',
  templateUrl: './slider-card-info-animation.component.html',
  styleUrls: ['./slider-card-info-animation.component.scss'],
})
export class SliderCardInfoAnimationComponent implements OnInit, OnDestroy {
  @Input() speed: string = '0.4s';
  @Input() width: string = '300px';
  @Input() height: string = '100px';

  currentSlide: number = 0;
  slideInterval: any;

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    clearInterval(this.slideInterval);
  }

  startAutoSlide() {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 3000); // Change slide every 3 seconds
  }

  pauseSlider() {
    clearInterval(this.slideInterval);
  }

  resumeSlider() {
    this.startAutoSlide();
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % 3; // There are 3 slides (0, 1, 2)
  }

  setSlide(slideIndex: number) {
    this.currentSlide = slideIndex;
  }
}
