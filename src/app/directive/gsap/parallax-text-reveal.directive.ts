import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Directive({
  selector: '[appParallaxTextReveal]',
})

// This effect causes the text element to appear from the bottom up when scrolled into the viewport.
export class ParallaxTextRevealDirective implements OnInit, OnDestroy {
  @Input() opacityFrom: number = 0;
  @Input() opacityTo: number = 1;
  @Input() start: string = 'top 80%';
  @Input() end: string = 'bottom 20%';
  @Input() scrub: boolean = true;

  private animation: gsap.core.Tween | null = null;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.initTextReveal();
  }

  ngOnDestroy() {
    if (this.animation) {
      this.animation.kill();
    }
  }

  private initTextReveal() {
    const element = this.el.nativeElement;

    this.animation = gsap.fromTo(
      element,
      { y: '100%', opacity: this.opacityFrom },
      {
        y: '0%',
        opacity: this.opacityTo,
        ease: 'power1.out',
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
