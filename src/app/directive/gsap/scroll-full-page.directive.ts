import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Directive({
  selector: '[appScrollFullPage]',
})
export class ScrollFullPageDirective implements OnInit, OnDestroy {
  @Input() speed: number = 1;
  @Input() direction = 'up';
  @Input() start: string = 'top bottom';
  @Input() end: string = 'bottom top';
  @Input() scrub: boolean = false;
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
    const viewportHeight = window.innerHeight;
    const moveDistance = -viewportHeight * this.speed;
    const toggleActions = this.reverse ? 'play none none reverse' : 'play none none none';

    this.animation = gsap.fromTo(
      element,
      { y: 0 },
      {
        y: moveDistance,
        ease: this.ease,
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
