import { Directive, ElementRef, Input, OnInit, HostListener } from '@angular/core';

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

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.setPositionDefault();
    this.checkScroll();
  }

  private setPositionDefault(): void {
    // Step 1: Set width và height cho phần tử
    this.el.nativeElement.style.width = this.el.nativeElement.offsetWidth + 'px';
    this.el.nativeElement.style.height = this.el.nativeElement.offsetHeight + 'px';

    // Step 2: Tạo một div mới để chứa tất cả các thẻ con
    const container = document.createElement('div');
    container.classList.add('parallax-lazy-load');
    while (this.el.nativeElement.firstChild) {
      container.appendChild(this.el.nativeElement.firstChild);
    }
    this.el.nativeElement.appendChild(container);

    // Step 3: Áp dụng animation cho div mới tạo
    const childDiv = this.el.nativeElement.querySelector('.parallax-lazy-load');
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
    const childDiv = this.el.nativeElement.querySelector('.parallax-lazy-load');
    childDiv.style.transition = transition;
    childDiv.style.transform = 'translate(0, 0)';
    if (this.fadeIn) {
      childDiv.style.opacity = '1';
    }
    this.activated = true;
  }

  private revertParallaxEffect(): void {
    const transition = `transform ${this.speed}s ${this.trajectory}, opacity ${this.fadeIn_speed}s ${this.fadeIn_trajectory}`;
    const childDiv = this.el.nativeElement.querySelector('.parallax-lazy-load');
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
    const rect = this.el.nativeElement.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;

      console.log(rect.bottom);
      console.log(windowHeight - parseInt(this.offsetBottom));

    if (rect.top >= 0 && rect.bottom <= windowHeight - parseInt(this.offsetBottom)) {
      this.activateParallaxEffect();
    } else {
      this.revertParallaxEffect();
    }
  }
}
