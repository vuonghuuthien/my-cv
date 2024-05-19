import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Directive({
  selector: '[appParallaxScale]',
})

// This effect will cause the element to zoom in or out when scrolled into the viewport.
export class ParallaxScaleDirective implements OnInit, OnDestroy {
  @Input() scaleFrom: number = 1;
  @Input() scaleTo: number = 1.5;
  @Input() duration: number = 1;
  @Input() start: string = 'top 80%';
  @Input() end: string = 'bottom 20%';
  @Input() scrub: boolean = true;

  private animation: gsap.core.Tween | null = null;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.initScale();
  }

  ngOnDestroy() {
    if (this.animation) {
      this.animation.kill();
    }
  }

  private initScale() {
    const element = this.el.nativeElement;

    this.animation = gsap.fromTo(
      element,
      { scale: this.scaleFrom },
      {
        scale: this.scaleTo,
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
