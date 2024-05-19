import {
  Directive,
  ElementRef,
  OnInit,
  OnDestroy,
  Input,
  HostListener,
  Renderer2,
} from '@angular/core';
import { gsap } from 'gsap';

@Directive({
  selector: '[appParallaxFloating]',
})

// This effect creates the feeling that elements on the web page are floating or oscillating slightly in place, and when hovering over them, they will move in the direction of the mouse pointer, creating the illusion that these elements entrained.
export class ParallaxFloatingDirective implements OnInit, OnDestroy {
  @Input() delay: number = 0;

  @Input() floating_xDistance: string = '+=0';
  @Input() floating_yDistance: string = '-=20'; // up and down 20px
  @Input() floating_repeat: number = -1; // infinity
  @Input() floating_yoyo: boolean = true; // revert
  @Input() floating_ease: string = 'sine.inOut';
  @Input() floating_duration: number = 2;

  @Input() flMouse_x: number = 0.1;
  @Input() flMouse_y: number = 0.1;
  @Input() flMouse_ease: string = 'power2.out';
  @Input() flMouse_duration: number = 0.5;

  private animation: gsap.core.Tween | null = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.initFloating();
  }

  ngOnDestroy() {
    if (this.animation) {
      this.animation.kill();
    }
  }

  private initFloating() {
    // Tạo hiệu ứng trôi nổi
    this.animation = gsap.to(this.el.nativeElement, {
      x: this.floating_xDistance,
      y: this.floating_yDistance,
      repeat: this.floating_repeat,
      yoyo: this.floating_yoyo,
      ease: this.floating_ease,
      delay: this.delay,
      duration: this.floating_duration,
    });
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    // Tạm dừng hiệu ứng trôi nổi
    if (this.animation) {
      this.animation.pause();
    }

    // Di chuyển theo con trỏ chuột
    const rect = this.el.nativeElement.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    gsap.to(this.el.nativeElement, {
      x: (mouseX - centerX) * this.flMouse_x, // Di chuyển theo trục x
      y: (mouseY - centerY) * this.flMouse_y, // Di chuyển theo trục y
      duration: this.flMouse_duration,
      ease: this.flMouse_ease,
    });
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    // Trở về vị trí ban đầu khi chuột rời đi
    gsap.to(this.el.nativeElement, {
      x: 0,
      y: 0,
      duration: 1,
      ease: 'power2.inOut',
      onComplete: () => {
        // Tiếp tục hiệu ứng trôi nổi sau khi trở về vị trí ban đầu
        if (this.animation) {
          this.animation.play();
        }
      },
    });
  }
}
