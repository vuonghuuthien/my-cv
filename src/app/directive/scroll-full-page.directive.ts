import { Directive, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appScrollFullPage]'
})
export class ScrollFullPageDirective implements AfterViewInit {

  private observer!: IntersectionObserver;
  private isAnimating: boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit() {
    this.initIntersectionObserver();
  }

  private initIntersectionObserver() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.01
    };

    this.observer = new IntersectionObserver(this.handleIntersect.bind(this), options);
    this.observer.observe(this.el.nativeElement);
  }

  private handleIntersect(entries: IntersectionObserverEntry[]) {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.boundingClientRect.top > 0 && !this.isAnimating) {
        this.scrollToElement();
      }
    });
  }

  private scrollToElement() {
    this.isAnimating = true;
    window.scrollTo({
      top: this.el.nativeElement.getBoundingClientRect().top + window.scrollY,
      behavior: 'smooth'
    });

    // Dừng animation sau một khoảng thời gian
    setTimeout(() => {
      this.isAnimating = false;
    }, 1000); // Thời gian animation, có thể điều chỉnh
  }
}
