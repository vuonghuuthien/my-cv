import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Directive({
  selector: '[appParallaxMoving]'
})
export class ParallaxMovingDirective implements OnInit, OnDestroy {
  @Input() startX: number = 0;
  @Input() startY: number = 0;
  @Input() endX: number = 100;
  @Input() endY: number = 100;
  @Input() speed: number = 0.5;

  private animation: gsap.core.Tween | null = null;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.initParallax();
  }

  ngOnDestroy() {
    if (this.animation) {
      this.animation.kill();
    }
  }

  private initParallax() {
    const element = this.el.nativeElement;

    this.animation = gsap.fromTo(
      element,
      { x: this.startX, y: this.startY },
      {
        x: this.endX,
        y: this.endY,
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: this.speed,
        }
      }
    );
  }
}
