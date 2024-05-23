import {
  Directive,
  ElementRef,
  AfterViewInit,
  Renderer2,
  Input,
} from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Directive({
  selector: '[appParallaxLetter]',
})
export class ParallaxLetterDirective implements AfterViewInit {
  @Input() delay: number = 0;
  @Input() duration: number = 1;
  @Input() stagger: number = 0.02; // delay letter in string
  @Input() initialY: number = 100;
  @Input() opacityFrom: number = 0;
  @Input() opacityTo: number = 1;
  @Input() start: string = 'top 80%';
  @Input() end: string = 'bottom 50%';
  @Input() scrub: boolean = false;
  @Input() reverse: boolean = true;
  @Input() ease: string = 'power3.out';

  private animation: gsap.core.Tween | null = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    const text = this.el.nativeElement.innerText;
    this.el.nativeElement.innerText = '';

    const letters = text.split('');
    const spanElements = letters.map((letter: string) => {
      const span = this.renderer.createElement('span');
      this.renderer.addClass(span, 'letter');
      this.renderer.setStyle(span, 'display', 'inline-block');
      if (letter === ' ') {
        this.renderer.setStyle(span, 'width', '0.2em'); // Adjust space width if necessary
      }
      this.renderer.setProperty(span, 'innerText', letter);
      this.el.nativeElement.appendChild(span);
      return span;
    });

    const toggleActions = this.reverse
      ? 'play none none reverse'
      : 'play none none none';

    this.animation = gsap.fromTo(
      spanElements,
      { y: this.initialY, opacity: this.opacityFrom },
      {
        y: 0,
        opacity: this.opacityTo,
        duration: this.duration,
        stagger: this.stagger,
        ease: this.ease,
        scrollTrigger: {
          trigger: this.el.nativeElement,
          toggleActions: toggleActions,
          start: this.start,
          end: this.end,
          scrub: this.scrub,
        },
      }
    );
  }
}
