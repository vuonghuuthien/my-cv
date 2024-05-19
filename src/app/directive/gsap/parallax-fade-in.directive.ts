import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Directive({
  selector: '[appParallaxFadeIn]',
})

// This effect will make the element gradually appear as it scrolls into the viewport.
export class ParallaxFadeInDirective implements OnInit, OnDestroy {
  @Input() duration: number = 1;
  @Input() opacityFrom: number = 0;
  @Input() opacityTo: number = 1;
  @Input() start: string = 'top 80%';
  @Input() end: string = 'bottom 20%';
  @Input() scrub: boolean = true;

  private animation: gsap.core.Tween | null = null;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.initFadeIn();
  }

  ngOnDestroy() {
    if (this.animation) {
      this.animation.kill();
    }
  }

  private initFadeIn() {
    const element = this.el.nativeElement;

    this.animation = gsap.fromTo(
      element,
      { opacity: this.opacityFrom },
      {
        opacity: this.opacityTo,
        duration: this.duration,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: element,
          start: this.start,
          end: this.end,
          toggleActions: 'play none none reverse',
          scrub: this.scrub,
        },
      }
    );
  }
}
