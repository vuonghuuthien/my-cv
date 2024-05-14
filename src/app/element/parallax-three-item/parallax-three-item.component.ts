import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parallax-three-item',
  templateUrl: './parallax-three-item.component.html',
  styleUrls: ['./parallax-three-item.component.scss'],
})
export class ParallaxThreeItemComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const cards = document.querySelector<HTMLElement>('.cards');
    const images = document.querySelectorAll<HTMLElement>('.card__img');
    const backgrounds = document.querySelectorAll<HTMLElement>('.card__bg');
    const range = 40;

    const calcValue = (a: number, b: number): string =>
      ((a / b) * range - range / 2).toFixed(1);

    let timeout: number | undefined;
    document.addEventListener(
      'mousemove',
      ({ x, y }) => {
        if (timeout) {
          window.cancelAnimationFrame(timeout);
        }

        timeout = window.requestAnimationFrame(() => {
          const yValue = calcValue(y, window.innerHeight);
          const xValue = calcValue(x, window.innerWidth);

          if (cards) {
            cards.style.transform = `rotateX(${yValue}deg) rotateY(${xValue}deg)`;
          }

          images.forEach((image: HTMLElement) => {
            if (image) {
              image.style.transform = `translateX(${-xValue}px) translateY(${yValue}px)`;
            }
          });

          backgrounds.forEach((background: HTMLElement) => {
            if (background) {
              background.style.backgroundPosition = `${Number(xValue) * .45}px ${-Number(yValue) * .45}px`;
            }
          });
        });
      },
      false
    );
  }
}
