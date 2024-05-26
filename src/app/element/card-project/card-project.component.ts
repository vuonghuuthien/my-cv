import {
  Component,
  Input,
  Output,
  ElementRef,
  OnChanges,
  AfterViewInit,
  EventEmitter,
  SimpleChanges,
} from '@angular/core';
import { Project } from 'src/app/model/project.model';

@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.scss'],
})
export class CardProjectComponent implements OnChanges, AfterViewInit {
  @Input() project!: Project;

  company = '';
  name = '';
  logo = '';
  roles: string[] = [];
  description = '';
  buttonTitle = '';
  buttonArrow = 1;
  buttonLink = '';
  buttonTitle2 = '';
  buttonArrow2 = 2;
  buttonLink2 = '';
  background = '';
  color = '';

  @Output() openModalRequest = new EventEmitter<void>();

  constructor(private elementRef: ElementRef) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['project'] && changes['project'].currentValue) {
      const project = changes['project'].currentValue as Project;
      this.company = project.company || '';
      this.name = project.name || '';
      this.logo = project.logo || '';
      this.roles = project.roles || [];
      this.description = project.description || '';
      this.buttonTitle = project.buttonTitle || '';
      this.buttonArrow = project.buttonArrow ?? 1;
      this.buttonLink = project.buttonLink || '';
      this.buttonTitle2 = project.buttonTitle2 || '';
      this.buttonArrow2 = project.buttonArrow2 ?? 2;
      this.buttonLink2 = project.buttonLink2 || '';
      this.background = project.background || '';
      this.color = project.color || '';
      this.setColor();
    }
  }

  ngAfterViewInit() {
    this.setColor();
  }

  hexToRgba(hex: string, alpha: number): string {
    // Chuyển đổi màu hex sang màu rgba với độ trong suốt
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (result) {
      const r = parseInt(result[1], 16);
      const g = parseInt(result[2], 16);
      const b = parseInt(result[3], 16);
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }
    return `rgba(0, 0, 0, ${alpha})`; // Mặc định là màu đen nếu màu hex không hợp lệ
  }

  setColor() {
    const card = this.elementRef.nativeElement.querySelector('#card');
    const roles = this.elementRef.nativeElement.querySelectorAll('.role');
    const button = this.elementRef.nativeElement.querySelector('#button');
    const button2_span = this.elementRef.nativeElement.querySelector('#button2 span');
    const button2_svg_paths = this.elementRef.nativeElement.querySelectorAll('#button2 svg path');
    if (card) {
      card.style.backgroundColor = this.hexToRgba(this.color, 0.1);
    }
    roles.forEach((role: HTMLElement) => {
      role.style.backgroundColor = this.hexToRgba(this.color, 0.2);
    });
    if (button) {
      button.style.backgroundColor = this.hexToRgba(this.color, 1);
    }
    if (button2_span) {
      button2_span.style.color = this.hexToRgba(this.color, 1);
    }
    button2_svg_paths.forEach((path: HTMLElement) => {
      path.style.fill = this.hexToRgba(this.color, 1);
    });
  }

  emitOpenModalRequest() {
    this.openModalRequest.emit();
  }
}
