import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { gsap } from 'gsap';

@Directive({
  selector: '[appParallaxMouseMove]',
})
export class ParallaxMouseMoveDirective {
  @Input() delay: number = 0;
  @Input() intensity: number = -20;
  @Input() duration: number = 0.5;
  @Input() ease: string = 'power2.out';

  constructor(private el: ElementRef) {}

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const { clientX: mouseX, clientY: mouseY } = event;
    const { innerWidth: width, innerHeight: height } = window;

    const x = mouseX / width;
    const y = mouseY / height;

    const moveX = (x - 0.5) * this.intensity;
    const moveY = (y - 0.5) * this.intensity;

    gsap.to(this.el.nativeElement, {
      x: moveX,
      y: moveY,
      ease: this.ease,
      delay: this.delay,
      duration: this.duration,
    });
  }
}
