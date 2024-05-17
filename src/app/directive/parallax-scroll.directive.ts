import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appParallaxScroll]'
})
export class ParallaxScrollDirective {

  @Input('ratio') parallaxRatio: number = 1;
  initialTop: number = 0;

  constructor(private el: ElementRef) { 
    this.initialTop = this.el.nativeElement.getBoundingClientRect().top;
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll(event: any) {
    const top = this.el.nativeElement.getBoundingClientRect().top;
    const offset = top - this.initialTop;
    this.el.nativeElement.style.transform = `translateY(${offset * this.parallaxRatio}px)`;
  }
}
