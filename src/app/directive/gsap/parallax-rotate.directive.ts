import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Directive({
  selector: '[appParallaxRotate]',
})

// This effect will cause the element to rotate when scrolled into the viewport.
export class ParallaxRotateDirective implements OnInit, OnDestroy {
  @Input() duration: number = 1;
  @Input() rotationFrom: number = 0;
  @Input() rotationTo: number = 180;
  @Input() start: string = 'top 80%';
  @Input() end: string = 'center center';
  @Input() transformOrigin:
    | 'center center'
    | 'top left'
    | 'top right'
    | 'bottom left'
    | 'bottom right' = 'center center';
  @Input() scrub: boolean = true;

  private animation: gsap.core.Tween | null = null;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.initRotate();
  }

  ngOnDestroy() {
    if (this.animation) {
      this.animation.kill();
    }
  }

  private initRotate() {
    const element = this.el.nativeElement;

    gsap.set(element, { transformOrigin: this.transformOrigin });

    this.animation = gsap.fromTo(
      element,
      { rotation: this.rotationFrom },
      {
        rotation: this.rotationTo,
        duration: this.duration,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: element,
          toggleActions: 'play none none reverse',
          start: this.start,
          end: this.end,
          scrub: this.scrub,
        },
      }
    );
  }
}
