import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  HostListener,
} from '@angular/core';

enum ParallaxEffectStyle {
  SlideUp = 'slide-up',
  SlideDown = 'slide-down',
  SlideLeft = 'slide-left',
  SlideRight = 'slide-right',
}

@Directive({
  selector: '[appParallaxLazyLoad]',
})
export class ParallaxLazyLoadDirective implements OnInit {
  @Input() offsetBottom: string = '200px'; // Offset to trigger the effect // From Bottom View Port
  @Input() delay: number = 0;
  @Input() speed: number = 1; // Effect speed, default is 1 (fast)
  @Input() effectStyle: ParallaxEffectStyle = ParallaxEffectStyle.SlideUp; // Style for effect, default is slide-up
  @Input() trajectory: string = 'linear'; // Motion trajectory // linear, ease, ease-in, ease-out, ease-in-out
  @Input() distance: string = '100%'; // Movement distance, default is 100%
  @Input() fadeIn: boolean = true; // Default fadeIn is false
  @Input() fadeIn_speed: number = this.speed;
  @Input() fadeIn_trajectory: string = this.trajectory;

  private activated: boolean = false;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.setPositionDefault();
    this.checkScroll();
  }

  private setPositionDefault(): void {
    switch (this.effectStyle) {
      case ParallaxEffectStyle.SlideUp:
        this.el.nativeElement.style.transform = `translate(0, ${this.distance})`;
        break;
      case ParallaxEffectStyle.SlideDown:
        this.el.nativeElement.style.transform = `translate(0, -${this.distance})`;
        break;
      case ParallaxEffectStyle.SlideLeft:
        this.el.nativeElement.style.transform = `translate(${this.distance}, 0)`;
        break;
      case ParallaxEffectStyle.SlideRight:
        this.el.nativeElement.style.transform = `translate(-${this.distance}, 0)`;
        break;
      default:
        break;
    }
    if (this.fadeIn) {
      this.el.nativeElement.style.opacity = '0';
    }
  }

  private activateParallaxEffect(): void {
    const transition = `transform ${this.speed}s ${this.trajectory}, opacity ${this.fadeIn_speed}s ${this.fadeIn_trajectory}`;
    this.el.nativeElement.style.transition = transition;
    this.el.nativeElement.style.transform = 'translate(0, 0)';
    if (this.fadeIn) {
      this.el.nativeElement.style.opacity = '1';
    }
    this.activated = true;
  }

  private revertParallaxEffect(): void {
    const transition = `transform ${this.speed}s ${this.trajectory}, opacity ${this.fadeIn_speed}s ${this.fadeIn_trajectory}`;
    this.el.nativeElement.style.transition = transition;
    switch (this.effectStyle) {
      case ParallaxEffectStyle.SlideUp:
        this.el.nativeElement.style.transform = `translate(0, ${this.distance})`;
        break;
      case ParallaxEffectStyle.SlideDown:
        this.el.nativeElement.style.transform = `translate(0, -${this.distance})`;
        break;
      case ParallaxEffectStyle.SlideLeft:
        this.el.nativeElement.style.transform = `translate(${this.distance}, 0)`;
        break;
      case ParallaxEffectStyle.SlideRight:
        this.el.nativeElement.style.transform = `translate(-${this.distance}, 0)`;
        break;
      default:
        break;
    }
    if (this.fadeIn) {
      this.el.nativeElement.style.opacity = '0';
    }
    this.activated = false;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScroll();
  }

  private checkScroll() {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    if (rect.top >= 0 && rect.bottom <= windowHeight) {
      this.activateParallaxEffect();
    } else {
      this.revertParallaxEffect(); // Revert effect if element is out of view
    }
  }
}
