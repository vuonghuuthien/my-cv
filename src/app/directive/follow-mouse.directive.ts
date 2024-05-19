import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appFollowMouse]',
})
export class FollowMouseDirective {
  @Input() referencePoint:
    | 'center'
    | 'top-left'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-right'
    | 'top'
    | 'bottom'
    | 'left'
    | 'right' = 'center';
  @Input() pointerEvents: string = 'none';
  @Input() zIndex: number | string = 110;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const element = this.el.nativeElement;
    const elementRect = element.getBoundingClientRect();
    let xOffset = 0;
    let yOffset = 0;

    switch (this.referencePoint) {
      case 'center':
        xOffset = elementRect.width / 2;
        yOffset = elementRect.height / 2;
        break;
      case 'top-left':
        xOffset = 0;
        yOffset = 0;
        break;
      case 'top-right':
        xOffset = elementRect.width;
        yOffset = 0;
        break;
      case 'bottom-left':
        xOffset = 0;
        yOffset = elementRect.height;
        break;
      case 'bottom-right':
        xOffset = elementRect.width;
        yOffset = elementRect.height;
        break;
      case 'top':
        xOffset = elementRect.width / 2;
        yOffset = 0;
        break;
      case 'bottom':
        xOffset = elementRect.width / 2;
        yOffset = elementRect.height;
        break;
      case 'left':
        xOffset = 0;
        yOffset = elementRect.height / 2;
        break;
      case 'right':
        xOffset = elementRect.width;
        yOffset = elementRect.height / 2;
        break;
    }

    const left = event.clientX - xOffset;
    const top = event.clientY - yOffset;

    this.renderer.setStyle(element, 'position', 'fixed');
    this.renderer.setStyle(element, 'left', `${left}px`);
    this.renderer.setStyle(element, 'top', `${top}px`);
    this.renderer.setStyle(element, 'z-index', this.zIndex);
    this.renderer.setStyle(element, 'pointer-events', this.pointerEvents);
  }
}
