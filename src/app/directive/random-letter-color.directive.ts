import { Directive, ElementRef, Input, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appRandomLetterColor]',
})
export class RandomLetterColorDirective implements OnInit {
  @Input() random: boolean = false;

  private colors: string[] = [
    '#ffb5e8',
    '#ff9cee',
    '#ffcce9',
    '#fcc2ff',
    '#f6a6ff',
    '#b28dff',
    '#c5a3ff',
    '#d5aaff',
    '#a39aff',
    '#b5b9ff',
    '#97a2ff',
    '#afcbff',
    '#aff8db',
    '#c4faf8',
    '#85e3ff',
    '#6eb5ff',
    '#bffcc6',
    '#7FFFD4',
    '#40E0D0',
    '#ffabab',
    '#ffbebc',
    '#ffcbc1',
  ];

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    if (this.random) {
      this.applyRandomColors();
    } else {
      this.applySequentialColors();
    }
  }

  private applySequentialColors(): void {
    const element = this.elRef.nativeElement;
    const text = element.innerText;
    element.innerHTML = '';

    text.split('').forEach((char: string, index: number) => {
      const span = this.renderer.createElement('span');
      const textNode = this.renderer.createText(char);
      this.renderer.appendChild(span, textNode);

      const colorIndex = index % this.colors.length;
      const color = this.colors[colorIndex];
      this.renderer.setStyle(span, 'color', color);

      this.renderer.appendChild(element, span);
    });
  }

  private applyRandomColors(): void {
    const element = this.elRef.nativeElement;
    const text = element.innerText;
    element.innerHTML = '';

    text.split('').forEach((char: string) => {
      const span = this.renderer.createElement('span');
      const textNode = this.renderer.createText(char);
      this.renderer.appendChild(span, textNode);

      const randomColor =
        this.colors[Math.floor(Math.random() * this.colors.length)];
      this.renderer.setStyle(span, 'color', randomColor);

      this.renderer.appendChild(element, span);
    });
  }
}
