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
  @Input() reverse: boolean = true;
  @Input() ease: string = 'power1.out';

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
    const toggleActions = this.reverse ? 'play none none reverse' : 'play none none none';

    this.animation = gsap.fromTo(
      element,
      { opacity: this.opacityFrom },
      {
        opacity: this.opacityTo,
        duration: this.duration,
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
