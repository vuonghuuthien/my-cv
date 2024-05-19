import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appFollowMouseInZone]',
})
export class FollowMouseInZoneDirective {
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

  private parent: HTMLElement | null = null;
  private child: HTMLElement;
  private mouseX: number = 0;
  private mouseY: number = 0;
  private isMouseInZone: boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.child = this.el.nativeElement;
  }

  ngOnInit() {
    this.parent = this.child.parentElement as HTMLElement;
    if (this.parent) {
      this.renderer.setStyle(this.child, 'position', 'absolute');
    } else {
      console.error('Parent element not found for the child element');
    }
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
    this.updateChildPosition();
  }

  @HostListener('document:scroll', ['$event'])
  onScroll() {
    this.updateChildPosition();
  }

  private updateChildPosition() {
    if (
      this.parent &&
      this.isMouseInParent(
        this.mouseX,
        this.mouseY,
        this.parent.getBoundingClientRect()
      )
    ) {
      const parentRect = this.parent.getBoundingClientRect();
      const x = this.mouseX - parentRect.left;
      const y = this.mouseY - parentRect.top;

      const adjustedPosition = this.calculateAdjustedPosition(x, y);

      this.renderer.setStyle(this.child, 'top', `${adjustedPosition.y}px`);
      this.renderer.setStyle(this.child, 'left', `${adjustedPosition.x}px`);
      this.renderer.setStyle(this.child, 'z-index', this.zIndex);
      this.renderer.setStyle(this.child, 'pointer-events', this.pointerEvents);
      this.isMouseInZone = true;
    } else if (this.isMouseInZone) {
      this.renderer.removeStyle(this.child, 'top');
      this.renderer.removeStyle(this.child, 'left');
      this.renderer.removeStyle(this.child, 'z-index');
      this.renderer.removeStyle(this.child, 'pointer-events');
      this.isMouseInZone = false;
    }
  }

  private calculateAdjustedPosition(
    x: number,
    y: number
  ): { x: number; y: number } {
    const childRect = this.child.getBoundingClientRect();

    // Adjust position based on reference point
    switch (this.referencePoint) {
      case 'center':
        return { x: x - childRect.width / 2, y: y - childRect.height / 2 };
      case 'top-left':
        return { x: x, y: y };
      case 'top-right':
        return { x: x - childRect.width, y: y };
      case 'bottom-left':
        return { x: x, y: y - childRect.height };
      case 'bottom-right':
        return { x: x - childRect.width, y: y - childRect.height };
      case 'top':
        return { x: x - childRect.width / 2, y: y };
      case 'bottom':
        return { x: x - childRect.width / 2, y: y - childRect.height };
      case 'left':
        return { x: x, y: y - childRect.height / 2 };
      case 'right':
        return { x: x - childRect.width, y: y - childRect.height / 2 };
      default:
        return { x: x, y: y }; // Default to top-left if invalid reference point
    }
  }

  private isMouseInParent(
    mouseX: number,
    mouseY: number,
    parentRect: DOMRect
  ): boolean {
    return (
      mouseX >= parentRect.left &&
      mouseX <= parentRect.right &&
      mouseY >= parentRect.top &&
      mouseY <= parentRect.bottom
    );
  }
}
