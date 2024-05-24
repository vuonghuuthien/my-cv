import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { gsap } from 'gsap';

@Directive({
  selector: '[appParallaxMouseMoveInElement]',
})
export class ParallaxMouseMoveInElementDirective {
  @Input() delay: number = 0;
  @Input() intensity: number = 20;
  @Input() duration: number = 0.5;
  @Input() ease: string = 'power2.out';

  private initialX!: number;
  private initialY!: number;

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter', ['$event'])
  onMouseEnter(event: MouseEvent) {
    const { clientX: mouseX, clientY: mouseY } = event;
    const { left, top, width, height } = this.el.nativeElement.getBoundingClientRect();

    // Calculate the center of the element
    this.initialX = left + width / 2;
    this.initialY = top + height / 2;

    // Calculate the offset based on the intensity
    const offsetX = ((mouseX - this.initialX) / width) * this.intensity;
    const offsetY = ((mouseY - this.initialY) / height) * this.intensity;

    // Animate the element to move slightly towards the mouse position
    gsap.to(this.el.nativeElement, {
      x: offsetX,
      y: offsetY,
      ease: this.ease,
      duration: this.duration,
    });
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const { clientX: mouseX, clientY: mouseY } = event;
    const { left, top, width, height } = this.el.nativeElement.getBoundingClientRect();

    // Calculate the offset based on the intensity and mouse movement within the element
    const offsetX = ((mouseX - this.initialX) / width) * this.intensity;
    const offsetY = ((mouseY - this.initialY) / height) * this.intensity;

    // Animate the element to follow the mouse movement slightly
    gsap.to(this.el.nativeElement, {
      x: offsetX,
      y: offsetY,
      ease: this.ease,
      duration: this.duration,
    });
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    // Reset the element position when the mouse leaves
    gsap.to(this.el.nativeElement, {
      x: 0,
      y: 0,
      ease: this.ease,
      duration: this.duration,
    });
  }
}
