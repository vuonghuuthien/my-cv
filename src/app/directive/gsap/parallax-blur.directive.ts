import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Directive({
  selector: '[appParallaxBlur]',
})

// This effect will fade the element as it scrolls into the viewport.
export class ParallaxBlurDirective implements OnInit, OnDestroy {
  @Input() blurFrom: number = 0;
  @Input() blurTo: number = 10;
  @Input() start: string = 'top 80%';
  @Input() end: string = 'bottom 20%';
  @Input() scrub: boolean = true;

  private animation: gsap.core.Tween | null = null;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.initBlur();
  }

  ngOnDestroy() {
    if (this.animation) {
      this.animation.kill();
    }
  }

  private initBlur() {
    const element = this.el.nativeElement;

    this.animation = gsap.fromTo(
      element,
      { filter: `blur(${this.blurFrom}px)` },
      {
        filter: `blur(${this.blurTo}px)`,
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          start: this.start,
          end: this.end,
          scrub: this.scrub,
        },
      }
    );
  }
}
