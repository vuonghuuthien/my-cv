import { Directive, ElementRef, Input, OnInit } from '@angular/core';

enum ParallaxEffectStyle {
  SlideUp = 'slide-up',
  SlideDown = 'slide-down',
  SlideLeft = 'slide-left',
  SlideRight = 'slide-right'
}

@Directive({
  selector: '[appParallaxLazyLoad]'
})
export class ParallaxLazyLoadDirective implements OnInit {
  @Input('delay') delay: number = 0;
  @Input('speed') speed: number = 1; // Effect speed, default is 1 (fast)
  @Input('effectStyle') effectStyle: ParallaxEffectStyle = ParallaxEffectStyle.SlideUp; // Style for effect, default is slide-up
  @Input('trajectory') trajectory: string = 'linear'; // Motion trajectory, default is linear
  @Input('distance') distance: string = '100%'; // Movement distance, default is 100%

  private observer!: IntersectionObserver;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            this.activateParallaxEffect();
          }, this.delay);
          this.observer.unobserve(entry.target);
        }
      });
    });

    this.observer.observe(this.el.nativeElement);
  }

  private activateParallaxEffect(): void {
    const transition = `transform ${this.speed}s ${this.trajectory}`;

    switch (this.effectStyle) {
      case ParallaxEffectStyle.SlideUp:
        this.el.nativeElement.style.transition = transition;
        this.el.nativeElement.style.transform = `translateY(-${this.distance})`;
        break;
      case ParallaxEffectStyle.SlideDown:
        this.el.nativeElement.style.transition = transition;
        this.el.nativeElement.style.transform = `translateY(${this.distance})`;
        break;
      case ParallaxEffectStyle.SlideLeft:
        this.el.nativeElement.style.transition = transition;
        this.el.nativeElement.style.transform = `translateX(-${this.distance})`;
        break;
      case ParallaxEffectStyle.SlideRight:
        this.el.nativeElement.style.transition = transition;
        this.el.nativeElement.style.transform = `translateX(${this.distance})`;
        break;
      default:
        break;
    }
  }
}
