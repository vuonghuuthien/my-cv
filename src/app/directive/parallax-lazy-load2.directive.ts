import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  HostListener,
} from '@angular/core';

enum ParallaxEffectStyle {
  SlideUp = 'slide-up',
  SlideDown = 'slide-down',
  SlideLeft = 'slide-left',
  SlideRight = 'slide-right',
}

@Directive({
  selector: '[appParallaxLazyLoad2]',
})
export class ParallaxLazyLoad2Directive implements OnInit {
  @Input() threshold: number = 0.01;
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

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.wrapElement();
    this.setPositionDefault();
    this.checkScroll();
  }

  private wrapElement(): void {
    // Create parent tag with class "parallax-lazy-load"
    this.parent = this.renderer.createElement('div');
    this.renderer.addClass(this.parent, 'parallax-lazy-load');

    const nativeElement = this.el.nativeElement;
    const computedStyle = getComputedStyle(nativeElement);

    // Set the width and height of the parent tag equal to the original size of the child tag
    this.renderer.setStyle(this.parent, 'width', nativeElement.offsetWidth + 'px');
    this.renderer.setStyle(this.parent, 'height', nativeElement.offsetHeight + 'px');

    // Get the margin attribute of the child tag and apply it to the parent tag
    this.renderer.setStyle(this.parent, 'margin', computedStyle.margin);

    // Delete the margin of child tags
    this.renderer.setStyle(nativeElement, 'margin', '0');

    // Insert the parent tag before the child tag and move the child tag inside the parent tag
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

  private parseOffsetBottom(offset: string): string {
    if (offset.endsWith('vh')) {
      const vh = parseFloat(offset);
      return (window.innerHeight * vh / 100) + 'px';
    } else if (offset.endsWith('%')) {
      const percentage = parseFloat(offset);
      const parentHeight = this.parent.offsetHeight;
      return (parentHeight * percentage / 100) + 'px';
    }
    return offset;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScroll();
  }

  private checkScroll() {
    const rect = this.parent.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    const offsetBottomValue = parseFloat(this.parseOffsetBottom(this.offsetBottom));

    if (rect.top >= 0 && rect.bottom <= windowHeight - offsetBottomValue) {
      this.activateParallaxEffect();
    } else if (this.revert) {
      this.revertParallaxEffect();
    }
  }
}
