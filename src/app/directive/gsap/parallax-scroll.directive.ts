import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Directive({
  selector: '[appParallaxScroll]',
})
export class ParallaxScrollDirective implements OnInit, OnDestroy {
  @Input() delay: number = 0;
  @Input() speed: number = 0.5;
  @Input() direction: 'up' | 'down' = 'up';
  @Input() maxDistance: number = 200;
  @Input() start: string = 'top bottom';
  @Input() end: string = 'bottom top';
  @Input() scrub: boolean = true;
  @Input() reverse: boolean = true;
  @Input() ease: string = 'none';

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

    let directionMultiplier = 1;
    switch (this.direction) {
      case 'up':
        directionMultiplier = -1;
        break;
      case 'down':
        directionMultiplier = 1;
        break;
    }

    const moveDistance = this.maxDistance * this.speed * directionMultiplier;
    const toggleActions = this.reverse ? 'play none none reverse' : 'play none none none';

    this.animation = gsap.fromTo(
      element,
      { y: 0 },
      {
        y: moveDistance,
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