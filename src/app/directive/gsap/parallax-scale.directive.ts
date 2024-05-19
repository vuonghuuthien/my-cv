import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Directive({
  selector: '[appParallaxScale]',
})

// This effect will cause the element to zoom in or out when scrolled into the viewport.
export class ParallaxScaleDirective implements OnInit, OnDestroy {
  @Input() delay: number = 0;
  @Input() scaleFrom: number = 1;
  @Input() scaleTo: number = 1.5;
  @Input() duration: number = 1;
  @Input() start: string = 'top 80%';
  @Input() end: string = 'bottom 20%';
  @Input() scrub: boolean = true;
  @Input() reverse: boolean = true;
  @Input() ease: string = 'power1.out';

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
    const toggleActions = this.reverse ? 'play none none reverse' : 'play none none none';

    this.animation = gsap.fromTo(
      element,
      { scale: this.scaleFrom },
      {
        scale: this.scaleTo,
        duration: this.duration,
        ease: this.ease,
        delay: this.delay,
        scrollTrigger: {
          trigger: element,
          toggleActions: toggleActions,
          start: this.start,
          end: this.end,
          scrub: this.scrub,
        },
      }
    );
  }
}
