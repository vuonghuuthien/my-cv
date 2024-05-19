import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Directive({
  selector: '[appParallaxPinning]',
})

// This effect keeps the element in a fixed position as you scroll past it, then continues scrolling when a certain point is reached.
export class ParallaxPinningDirective implements OnInit, OnDestroy {
  @Input() start: string = 'top top';
  @Input() end: string = '+=500'; // phần tử sẽ bị giữ cố định trong khoảng 500px cuộn
  @Input() scrub: boolean = true;
  @Input() reverse: boolean = true;

  private animation: gsap.core.Tween | null = null;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.initPin();
  }

  ngOnDestroy() {
    if (this.animation) {
      this.animation.kill();
    }
  }

  private initPin() {
    const element = this.el.nativeElement;
    const toggleActions = this.reverse ? 'play none none reverse' : 'play none none none';

    ScrollTrigger.create({
      trigger: element,
      toggleActions: toggleActions,
      pin: true,
      start: this.start,
      end: this.end,
      scrub: this.scrub,
    });
  }
}
