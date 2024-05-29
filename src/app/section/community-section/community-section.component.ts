import { Component, AfterViewInit, Renderer2, ElementRef, ViewChild, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-community-section',
  templateUrl: './community-section.component.html',
  styleUrls: ['./community-section.component.scss']
})
export class CommunitySectionComponent implements AfterViewInit, OnDestroy {

  linkFigma: string = "https://www.figma.com/@vuonghuuthien";

  @ViewChild('mockupElement', { static: false }) mockupElement!: ElementRef;
  @ViewChild('svgElement', { static: false }) svgElement!: ElementRef;
  @ViewChild('screenElement', { static: false }) screenElement!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.updateScreenElement();
    window.addEventListener('resize', this.updateScreenElement.bind(this));
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.updateScreenElement.bind(this));
  }

  updateScreenElement() {
    const svgDoc = this.svgElement.nativeElement;
    const targetRect = svgDoc.getElementById('target-rect');

    if (targetRect) {
      const rectBoundingBox = targetRect.getBoundingClientRect();
      const parentBoundingBox = this.mockupElement.nativeElement.getBoundingClientRect();

      const rectX = rectBoundingBox.left - parentBoundingBox.left;
      const rectY = rectBoundingBox.top - parentBoundingBox.top;
      const rectWidth = rectBoundingBox.width;
      const rectHeight = rectBoundingBox.height;

      // Thiết lập vị trí và kích thước cho thẻ div .screen
      this.renderer.setStyle(this.screenElement.nativeElement, 'position', 'absolute');
      this.renderer.setStyle(this.screenElement.nativeElement, 'left', `${rectX}px`);
      this.renderer.setStyle(this.screenElement.nativeElement, 'top', `${rectY}px`);
      this.renderer.setStyle(this.screenElement.nativeElement, 'width', `${rectWidth}px`);
      this.renderer.setStyle(this.screenElement.nativeElement, 'height', `${rectHeight}px`);
    }
  }
}
