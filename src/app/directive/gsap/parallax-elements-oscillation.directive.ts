import { Directive, ElementRef, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';
import { random } from 'lodash';

@Directive({
  selector: '[appParallaxElementsOscillation]',
})

// The effect of moving Elements oscillating in place.
export class ParallaxElementsOscillationDirective implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const elements = Array.from(
      this.el.nativeElement.children
    ) as HTMLElement[];
    elements.forEach((element) => {
      gsap.to(element, {
        x: random(-20, 20),
        y: random(-20, 20),
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });
    });
  }
}
