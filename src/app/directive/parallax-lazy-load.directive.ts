import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  OnDestroy,
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
export class ParallaxLazyLoadDirective implements OnInit, OnDestroy {
  @Input() threshold: number = 0.01; // 0, 0.5, 1
  @Input() offsetBottom: string = '200px';
  @Input() delay: number = 0;
  @Input() speed: number = 1;
  @Input() effectStyle: ParallaxEffectStyle = ParallaxEffectStyle.SlideUp;
  @Input() trajectory: string = 'linear';
  @Input() distance: string = '100%';
  @Input() fadeIn: boolean = true;
  @Input() fadeIn_speed: number = this.speed;
  @Input() fadeIn_trajectory: string = this.trajectory;
  @Input() revert: boolean = true;

  private activated: boolean = false;
  private parent!: HTMLElement;
  private observer!: IntersectionObserver;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.wrapElement();
    this.setPositionDefault();
    this.createObserver();
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private wrapElement(): void {
    // Create a new div tag with class "parallax-lazy-load"
    this.parent = this.renderer.createElement('div');
    this.renderer.addClass(this.parent, 'parallax-lazy-load');

    // Set width and height for new div tag
    const nativeElement = this.el.nativeElement;
    const computedStyle = getComputedStyle(nativeElement);
    this.renderer.setStyle(
      this.parent,
      'width',
      nativeElement.offsetWidth + 'px'
    );
    this.renderer.setStyle(
      this.parent,
      'height',
      nativeElement.offsetHeight + 'px'
    );

    // Switch the margin attribute of the directive added tag to the "parallax-lazy-load" tag
    this.renderer.setStyle(this.parent, 'margin', computedStyle.margin);

    // Delete the margin of the tag added to the directive
    this.renderer.setStyle(nativeElement, 'margin', '0');

    // Place the "parallax-lazy-load" tag around the tag to which the directive is added
    const parentNode = nativeElement.parentNode;
    this.renderer.insertBefore(parentNode, this.parent, nativeElement);
    this.renderer.appendChild(this.parent, nativeElement);
  }

  private setPositionDefault(): void {
    const childDiv = this.el.nativeElement;

    switch (this.effectStyle) {
      case ParallaxEffectStyle.SlideUp:
        childDiv.style.transform = `translate(0, ${this.distance})`;
        break;
      case ParallaxEffectStyle.SlideDown:
        childDiv.style.transform = `translate(0, -${this.distance})`;
        break;
      case ParallaxEffectStyle.SlideLeft:
        childDiv.style.transform = `translate(${this.distance}, 0)`;
        break;
      case ParallaxEffectStyle.SlideRight:
        childDiv.style.transform = `translate(-${this.distance}, 0)`;
        break;
      default:
        break;
    }
    if (this.fadeIn) {
      childDiv.style.opacity = '0';
    }
  }

  private activateParallaxEffect(): void {
    const transition = `transform ${this.speed}s ${this.trajectory}, opacity ${this.fadeIn_speed}s ${this.fadeIn_trajectory}`;
    const childDiv = this.el.nativeElement;
    childDiv.style.transition = transition;
    childDiv.style.transform = 'translate(0, 0)';
    if (this.fadeIn) {
      childDiv.style.opacity = '1';
    }
    this.activated = true;
  }

  private revertParallaxEffect(): void {
    const transition = `transform ${this.speed}s ${this.trajectory}, opacity ${this.fadeIn_speed}s ${this.fadeIn_trajectory}`;
    const childDiv = this.el.nativeElement;
    childDiv.style.transition = transition;
    switch (this.effectStyle) {
      case ParallaxEffectStyle.SlideUp:
        childDiv.style.transform = `translate(0, ${this.distance})`;
        break;
      case ParallaxEffectStyle.SlideDown:
        childDiv.style.transform = `translate(0, -${this.distance})`;
        break;
      case ParallaxEffectStyle.SlideLeft:
        childDiv.style.transform = `translate(${this.distance}, 0)`;
        break;
      case ParallaxEffectStyle.SlideRight:
        childDiv.style.transform = `translate(-${this.distance}, 0)`;
        break;
      default:
        break;
    }
    if (this.fadeIn) {
      childDiv.style.opacity = '0';
    }
    this.activated = false;
  }

  // Add parseOffsetBottom function to handle offsetBottom
  private parseOffsetBottom(offset: string): string {
    if (offset.endsWith('vh')) {
      const vh = parseFloat(offset);
      return (window.innerHeight * vh) / 100 + 'px';
    } else if (offset.endsWith('%')) {
      const percentage = parseFloat(offset);
      const parentHeight = this.parent.offsetHeight;
      return (parentHeight * percentage) / 100 + 'px';
    }
    return offset; // If not 'vh' or '%', return the original value
  }

  private createObserver(): void {
    const offsetBottomValue = this.parseOffsetBottom(this.offsetBottom); 
    
    const options = {
      root: null,
      rootMargin: `0px 0px -${offsetBottomValue} 0px`,
      threshold: this.threshold,
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.activateParallaxEffect();
        } else if (this.revert) {
          this.revertParallaxEffect();
        }
      });
    }, options);

    this.observer.observe(this.parent);
  }
}
