import {
  Component,
  AfterViewInit,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-rotating-text-animation',
  templateUrl: './rotating-text-animation.component.html',
  styleUrls: ['./rotating-text-animation.component.scss'],
})
export class RotatingTextAnimationComponent implements AfterViewInit {
  roles = ['UX/UI Designer', 'Front-End Animator', 'Full-Stack Developer'];

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.initializeRotation();
  }

  initializeRotation(): void {
    const roles: NodeListOf<HTMLElement> =
      this.el.nativeElement.querySelectorAll('.role');
    let currentRoleIndex = 0;
    const maxRoleIndex = roles.length - 1;

    const rotateText = () => {
      const currentRole = roles[currentRoleIndex];
      const nextRole =
        currentRoleIndex === maxRoleIndex
          ? roles[0]
          : roles[currentRoleIndex + 1];

      // Rotate out chars of current role
      Array.from(currentRole.children).forEach((char, i) => {
        setTimeout(() => {
          (char as HTMLElement).className = 'char out';
        }, i * 80);
      });

      // Reveal and rotate in chars of next role
      nextRole.style.opacity = '1';
      Array.from(nextRole.children).forEach((char, i) => {
        (char as HTMLElement).className = 'char behind';
        setTimeout(() => {
          (char as HTMLElement).className = 'char in';
        }, 340 + i * 80);
      });

      currentRoleIndex =
        currentRoleIndex === maxRoleIndex ? 0 : currentRoleIndex + 1;
    };

    // Initialize the first role
    roles[currentRoleIndex].style.opacity = '1';

    // Start the rotation
    rotateText();
    setInterval(rotateText, 4000);
  }
}
