import { Directive, ElementRef, Renderer2, AfterViewInit, OnDestroy } from '@angular/core';
import { gsap } from 'gsap';
import { random } from 'lodash';

interface LineConnection {
  line: HTMLElement;
  startElement: HTMLElement;
  endElement: HTMLElement;
}

@Directive({
  selector: '[appParallaxParticle]'
})
export class ParallaxParticleDirective implements AfterViewInit, OnDestroy {
  private elements: HTMLElement[] = [];
  private lines: LineConnection[] = [];
  private colors = ['#8474f9', '#f4717d', '#55a5ff'];
  // private colors = ['#C8C2F7', '#F5C1C6', '#B6D6FA'];
  private maxLines = 3;
  private lineCreationTimeouts: any[] = [];

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.elements = Array.from(this.el.nativeElement.children) as HTMLElement[];
    this.initializeParticles();
    this.startLineEffect();
    this.startUpdatingLines();
  }

  ngOnDestroy() {
    this.lineCreationTimeouts.forEach(timeout => clearTimeout(timeout));
    gsap.ticker.remove(this.updateLines);
  }

  private initializeParticles() {
    this.elements.forEach(element => {
      gsap.to(element, {
        x: random(-20, 20),
        y: random(-20, 20),
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      });
    });
  }

  private startLineEffect() {
    for (let i = 0; i < this.maxLines; i++) {
      this.createLineWithRandomDelay(i);
    }
  }

  private startUpdatingLines() {
    gsap.ticker.add(this.updateLines.bind(this));
  }

  private createLineWithRandomDelay(index: number) {
    const delay = random(1, 3) * 1000; // Random delay between 1 to 3 seconds
    const timeoutId = setTimeout(() => {
      this.createLine();
      this.createLineWithRandomDelay(index); // Schedule next line creation
    }, delay);
    this.lineCreationTimeouts.push(timeoutId);
  }

  private createLine() {
    const startElement = this.getRandomElement();
    let endElement = this.getRandomElement();

    // Ensure endElement is different from startElement
    while (endElement === startElement) {
      endElement = this.getRandomElement();
    }

    const line = this.createLineElement(startElement, endElement, this.colors[random(0, this.colors.length - 1)]);
    this.lines.push({ line, startElement, endElement });
    this.renderer.appendChild(this.el.nativeElement, line);

    // Fade in effect
    gsap.fromTo(line, { opacity: 0 }, { opacity: 1, duration: 1, onComplete: () => {
      // Schedule fade out and removal
      const removeDelay = random(1, 3) * 1000; // Random delay between 1 to 3 seconds
      setTimeout(() => {
        gsap.to(line, { opacity: 0, duration: 1, onComplete: () => {
          this.renderer.removeChild(this.el.nativeElement, line);
          this.lines = this.lines.filter(l => l.line !== line);
        }});
      }, removeDelay);
    }});
  }

  private createLineElement(startElement: HTMLElement, endElement: HTMLElement, color: string): HTMLElement {
    const line = this.renderer.createElement('div');
    this.renderer.setStyle(line, 'position', 'absolute');
    this.renderer.setStyle(line, 'background', color);
    this.renderer.setStyle(line, 'height', '1px');
    this.renderer.setStyle(line, 'border-radius', '2px');
    this.renderer.setStyle(line, 'z-index', -1);

    this.updateLinePosition(line, startElement, endElement);

    return line;
  }

  private updateLinePosition(line: HTMLElement, startElement: HTMLElement, endElement: HTMLElement) {
    const startRect = startElement.getBoundingClientRect();
    const endRect = endElement.getBoundingClientRect();
    const parentRect = this.el.nativeElement.getBoundingClientRect();

    const x1 = startRect.left + startRect.width / 2 - parentRect.left;
    const y1 = startRect.top + startRect.height / 2 - parentRect.top;
    const x2 = endRect.left + endRect.width / 2 - parentRect.left;
    const y2 = endRect.top + endRect.height / 2 - parentRect.top;

    const length = Math.hypot(x2 - x1, y2 - y1);
    const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;

    this.renderer.setStyle(line, 'width', `${length}px`);
    this.renderer.setStyle(line, 'transform-origin', '0 0');
    this.renderer.setStyle(line, 'transform', `translate(${x1}px, ${y1}px) rotate(${angle}deg)`);
  }

  private updateLines() {
    this.lines.forEach(({ line, startElement, endElement }) => {
      this.updateLinePosition(line, startElement, endElement);
    });
  }

  private getRandomElement(): HTMLElement {
    return this.elements[random(0, this.elements.length - 1)];
  }
}
