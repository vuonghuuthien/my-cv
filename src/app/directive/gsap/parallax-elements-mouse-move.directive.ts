import {
  Directive,
  ElementRef,
  HostListener,
  AfterViewInit,
  Input,
} from '@angular/core';
import { gsap } from 'gsap';
import { random } from 'lodash';

interface ParticleAttributes {
  element: HTMLElement;
  intensity: number;
  duration: number;
  ease: string;
}

@Directive({
  selector: '[appParallaxElementsMouseMove]',
})
export class ParallaxElementsMouseMoveDirective implements AfterViewInit {
  @Input() defaultIntensity: number = 100;
  @Input() defaultDuration: number = 2;
  @Input() defaultEase: string = 'power2.out';

  private elements: HTMLElement[] = [];
  private particleAttributes: ParticleAttributes[] = [];
  private mouse = { x: 0, y: 0 };

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.elements = Array.from(this.el.nativeElement.children) as HTMLElement[];
    this.initializeParticles();
  }

  // @HostListener('mousemove', ['$event']) // Inside tag include directive
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const rect = this.el.nativeElement.getBoundingClientRect();
    this.mouse.x = event.clientX - rect.left;
    this.mouse.y = event.clientY - rect.top;
    this.applyMouseParallax();
  }

  private initializeParticles() {
    this.elements.forEach((element) => {
      const intensity = random(10, this.defaultIntensity); // Random intensity
      const duration = random(0.5, this.defaultDuration); // Random duration
      const ease = this.defaultEase;
      this.particleAttributes.push({ element, intensity, duration, ease });
    });
  }

  private applyMouseParallax() {
    this.particleAttributes.forEach(
      ({ element, intensity, duration, ease }) => {
        const rect = element.getBoundingClientRect();
        const parentRect = this.el.nativeElement.getBoundingClientRect();
        const elementCenterX = rect.left + rect.width / 2 - parentRect.left;
        const elementCenterY = rect.top + rect.height / 2 - parentRect.top;

        const dx = (this.mouse.x - elementCenterX) / parentRect.width;
        const dy = (this.mouse.y - elementCenterY) / parentRect.height;

        const moveX = (dx - 0.5) * intensity;
        const moveY = (dy - 0.5) * intensity;

        gsap.to(element, {
          x: moveX,
          y: moveY,
          ease,
          duration,
        });
      }
    );
  }
}
