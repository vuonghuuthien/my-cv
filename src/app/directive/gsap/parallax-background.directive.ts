import { Directive, ElementRef, Input, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Directive({
  selector: '[appParallaxBackground]'
})

// This effect causes the element's background image to move at a different speed than the content inside as the page scrolls, creating a parallax effect.

export class ParallaxBackgroundDirective implements OnInit, OnDestroy {
  @Input() speed: number = 0.5;
  @Input() linkBG: string = '/assets/ServiceImage.png';
  @Input() start: string = 'top bottom';
  @Input() end: string = 'bottom top';
  @Input() scrub: boolean = true;

  private animation: gsap.core.Tween | null = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.initParallaxBackground();
  }

  ngOnDestroy() {
    if (this.animation) {
      this.animation.kill();
    }
  }

  private initParallaxBackground() {
    const element = this.el.nativeElement;

    // Add background image via renderer for better Angular integration
    this.renderer.setStyle(element, 'backgroundImage', `url(${this.linkBG})`);
    this.renderer.setStyle(element, 'backgroundAttachment', 'fixed');
    this.renderer.setStyle(element, 'backgroundSize', 'cover');

    this.animation = gsap.to(element, {
      backgroundPosition: `50% ${this.speed * 100}%`,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: this.start,
        end: this.end,
        scrub: this.scrub,
      },
    });
  }
}
