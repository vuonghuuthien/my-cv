import {
  Directive,
  ElementRef,
  Input,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Directive({
  selector: '[appParallaxStagger]',
})

// This effect applies animation to a group of elements with a delay between elements.
export class ParallaxStaggerDirective implements AfterViewInit, OnDestroy {
  @Input() stagger: number = 0.2;
  @Input() start: string = 'top 80%';
  @Input() end: string = 'bottom 20%';
  @Input() scrub: boolean = true;

  private animation: gsap.core.Tween | null = null;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.initStagger();
  }

  ngOnDestroy() {
    if (this.animation) {
      this.animation.kill();
    }
  }

  private initStagger() {
    const elements = this.el.nativeElement.children;

    this.animation = gsap.fromTo(
      elements,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        ease: 'power1.out',
        stagger: this.stagger,
        scrollTrigger: {
          trigger: this.el.nativeElement,
          start: this.start,
          end: this.end,
          scrub: this.scrub,
        },
      }
    );
  }
}
