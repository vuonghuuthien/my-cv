import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Directive({
  selector: '[appParallaxMoving]'
})
export class ParallaxMovingDirective implements OnInit, OnDestroy {
  @Input() delay: number = 0;
  @Input() startX: number = 0;
  @Input() startY: number = 0;
  @Input() endX: number = 100;
  @Input() endY: number = 100;
  @Input() speed: number = 0.5;
  @Input() start: string = 'top bottom';
  @Input() end: string = 'bottom bottom';
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
    const toggleActions = this.reverse ? 'play none none reverse' : 'play none none none';

    this.animation = gsap.fromTo(
      element,
      { x: this.startX, y: this.startY },
      {
        x: this.endX,
        y: this.endY,
        ease: this.ease,
        delay: this.delay,
        scrollTrigger: {
          trigger: element,
          toggleActions: toggleActions,
          start: this.start,
          end: this.end,
          scrub: this.speed,
        }
      }
    );
  }
}
