import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Directive({
  selector: '[appParallaxTyping]',
})
export class ParallaxTypingDirective implements OnInit, OnDestroy {
  @Input() start: string = 'top 80%';
  @Input() end: string = 'bottom 20%';
  @Input() scrub: boolean = true;
  @Input() reverse: boolean = true;

  private animation: gsap.core.Tween | null = null;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.initTypingScroll();
  }

  ngOnDestroy() {
    if (this.animation) {
      this.animation.kill();
    }
  }

  private initTypingScroll() {
    const element = this.el.nativeElement;
    const text = element.textContent.trim();
    element.textContent = ''; // Clear text content

    for (let i = 0; i < text.length; i++) {
      const span = document.createElement('span');
      span.textContent = text[i];
      span.style.opacity = '0';
      element.appendChild(span);
    }

    const toggleActions = this.reverse ? 'play none none reverse' : 'play none none none';

    gsap.to(element.children, {
      duration: 1,
      opacity: 1,
      stagger: 0.1,
      scrollTrigger: {
        trigger: element,
        toggleActions: toggleActions,
        start: this.start,
        end: this.end,
        scrub: this.scrub,
      },
    });
  }
}
