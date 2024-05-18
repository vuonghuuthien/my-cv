import { Directive, ElementRef, Input, OnInit, HostListener, Renderer2 } from '@angular/core';

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
  @Input() offsetBottom: string = '200px';
  @Input() delay: number = 0;
  @Input() speed: number = 1;
  @Input() effectStyle: ParallaxEffectStyle = ParallaxEffectStyle.SlideUp;
  @Input() trajectory: string = 'linear';
  @Input() distance: string = '100%';
  @Input() fadeIn: boolean = true;
  @Input() fadeIn_speed: number = this.speed;
  @Input() fadeIn_trajectory: string = this.trajectory;

  private activated: boolean = false;
  private parent!: HTMLElement;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.wrapElement();
    this.setPositionDefault();
    this.checkScroll();
  }

  private wrapElement(): void {
    // Tạo một thẻ div mới với class "parallax-lazy-load"
    this.parent = this.renderer.createElement('div');
    this.renderer.addClass(this.parent, 'parallax-lazy-load');

    // Set width và height cho thẻ div mới
    const nativeElement = this.el.nativeElement;
    const computedStyle = getComputedStyle(nativeElement);
    this.renderer.setStyle(this.parent, 'width', nativeElement.offsetWidth + 'px');
    this.renderer.setStyle(this.parent, 'height', nativeElement.offsetHeight + 'px');

    // Chuyển thuộc tính margin của thẻ được thêm directive sang thẻ "parallax-lazy-load"
    this.renderer.setStyle(this.parent, 'margin', computedStyle.margin);

    // Xóa margin của thẻ được thêm directive
    this.renderer.setStyle(nativeElement, 'margin', '0');

    // Đặt thẻ "parallax-lazy-load" bao quanh thẻ được thêm directive
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

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScroll();
  }

  private checkScroll() {
    const rect = this.parent.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;

    if (rect.top >= 0 && rect.bottom <= windowHeight - parseInt(this.offsetBottom)) {
      this.activateParallaxEffect();
    } else {
      this.revertParallaxEffect();
    }
  }
}
