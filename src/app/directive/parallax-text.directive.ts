import { Directive, ElementRef, Input, OnInit } from '@angular/core';

enum ParallaxEffectStyle {
  SlideUp = 'slide-up',
  SlideDown = 'slide-down',
  SlideLeft = 'slide-left',
  SlideRight = 'slide-right',
}

enum ParallaxTrajectory {
  Linear = 'linear',
  EaseIn = 'ease-in',
  EaseOut = 'ease-out',
  EaseInOut = 'ease-in-out',
}

@Directive({
  selector: '[appParallaxText]',
})
export class ParallaxTextDirective implements OnInit {
  @Input() speed: number = 1; // Default speed of the animation is 1 second
  @Input() delayChar: number = 0.1; // Delay between characters
  @Input() delay: number = 0; // Delay before animation starts
  @Input() effectStyle: ParallaxEffectStyle = ParallaxEffectStyle.SlideUp; // Default effect style is slide-up
  @Input() trajectory: ParallaxTrajectory = ParallaxTrajectory.Linear; // Default trajectory is linear
  @Input() distance: string = '100%'; // Default distance is 100%
  @Input() fadeIn: boolean = false; // Default fadeIn is false

  private textContent: string = ''; // Content of the text
  private activated: boolean = false; // Whether the Parallax effect has been activated

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.textContent = this.el.nativeElement.textContent.trim();
    this.el.nativeElement.textContent = ''; // Clear the content of the element

    const charElements: HTMLElement[] = [];

    // Create child elements for each character of the text
    this.textContent.split('').forEach((char, index) => {
      const charElement = document.createElement('span');
      charElement.textContent = char;
      charElement.style.transition = `transform ${this.speed}s ${
        this.trajectory
      } ${this.delay + this.delayChar * index}s, opacity ${this.speed}s ${
        this.trajectory
      } ${this.delay + this.delayChar * index}s`;

      // Set initial transform based on effectStyle
      switch (this.effectStyle) {
        case ParallaxEffectStyle.SlideUp:
          charElement.style.transform = `translate(0, ${this.distance})`;
          break;
        case ParallaxEffectStyle.SlideDown:
          charElement.style.transform = `translate(0, -${this.distance})`;
          break;
        case ParallaxEffectStyle.SlideLeft:
          charElement.style.transform = `translate(${this.distance}, 0)`;
          break;
        case ParallaxEffectStyle.SlideRight:
          charElement.style.transform = `translate(-${this.distance}, 0)`;
          break;
        default:
          break;
      }

      // Set initial opacity for fade-in effect
      if (this.fadeIn) {
        charElement.style.opacity = '0';
      }

      charElement.style.display = 'inline-block'; // Set display to inline-block
      charElement.style.fontSize = 'inherit'; // Inherit font size
      charElement.style.lineHeight = 'inherit'; // Inherit line height
      this.el.nativeElement.appendChild(charElement);
      charElements.push(charElement);
    });

    // Apply Parallax effect
    this.el.nativeElement.style.display = 'inline-flex';
    this.el.nativeElement.style.overflow = 'hidden';
    this.el.nativeElement.style.whiteSpace = 'pre'; // Set white-space to pre

    // Apply Parallax effect when the element is scrolled into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !this.activated) {
          this.activateParallax(charElements);
          observer.unobserve(this.el.nativeElement);
        }
      });
    });

    observer.observe(this.el.nativeElement);
  }

  private activateParallax(charElements: HTMLElement[]) {
    charElements.forEach((charElement) => {
      charElement.style.transform = 'translate(0,0)';
      if (this.fadeIn) {
        charElement.style.opacity = '1';
      }
    });
    this.activated = true;
  }
}
