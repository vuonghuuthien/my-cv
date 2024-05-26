import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  NgZone,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Project, Technology } from 'src/app/model/project.model';

@Component({
  selector: 'app-card-project-description',
  templateUrl: './card-project-description.component.html',
  styleUrls: ['./card-project-description.component.scss'],
})
export class CardProjectDescriptionComponent
  implements OnChanges, AfterViewInit
{
  @Input() project!: Project;

  company = '';
  name = '';
  logo = '';
  roles: string[] = [];
  description = '';
  buttonTitle = '';
  buttonArrow = 1;
  buttonLink = '';
  background = '';
  color = '';
  description_2 = '';
  role_2 = '';
  technologies: Technology[] = [];
  previewFolder = '';
  previewLength = 0;
  totalScreens = 0;
  totalComponents = 0;
  imagePaths: string[] = [];
  imagePaths_chunk: string[][] = [];
  isPreviewGrid: boolean = false;

  constructor(
    private elementRef: ElementRef,
    private sanitizer: DomSanitizer,
    private ngZone: NgZone
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['project'] && changes['project'].currentValue) {
      this.resetValues();

      const project = changes['project'].currentValue as Project;
      this.company = project.company || '';
      this.name = project.name || '';
      this.logo = project.logo || '';
      this.roles = project.roles || [];
      this.description = project.description || '';
      this.buttonTitle = project.buttonTitle || '';
      this.buttonArrow = project.buttonArrow ?? 1;
      this.buttonLink = project.buttonLink || '';
      this.background = project.background || '';
      this.color = project.color || '';
      this.description_2 = this.formatDescription(project.description_2 || '');
      this.role_2 = this.formatDescription(project.role_2 || '');
      this.technologies = project.technologies || [];
      this.previewFolder = project.previewFolder || '';
      this.previewLength = project.previewLength ?? 0;
      this.totalScreens = project.totalScreens ?? 0;
      this.totalComponents = project.totalComponents ?? 0;
      this.loadImages();

      setTimeout(() => {
        this.setColor();
      }, 0);
    }
  }

  ngAfterViewInit() {
    this.loadImages();
    setTimeout(() => {
      this.setColor();
    }, 0);
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
    const header = this.elementRef.nativeElement.querySelector('#header');
    const roles = this.elementRef.nativeElement.querySelectorAll('.role');
    const button = this.elementRef.nativeElement.querySelector('#button');
    if (header) {
      header.style.backgroundColor = this.hexToRgba(this.color, 0.1);
    }
    roles.forEach((role: HTMLElement) => {
      role.style.backgroundColor = this.hexToRgba(this.color, 0.2);
    });
    if (button) {
      button.style.backgroundColor = this.hexToRgba(this.color, 1);
    }
  }

  formatDescription(description: string): string {
    const paragraphs = description.split('\n\n');
    let listCounter = 1;
    let isPreviousList = false;
  
    return paragraphs
      .map((paragraph) => {
        if (paragraph.startsWith('- ')) {
          if (!isPreviousList) {
            listCounter = 1; // Reset the list counter when a new list starts
            isPreviousList = true;
          }
          const titleEndIndex = paragraph.indexOf(':') + 1;
          let title = '';
          let content = '';
  
          if (titleEndIndex > 0) {
            // There is a title (with a colon)
            title = paragraph.substring(2, titleEndIndex).trim();
            content = paragraph.substring(titleEndIndex).trim();
          } else {
            // There is no title (no colon found)
            content = paragraph.substring(2).trim();
          }
  
          if (title) {
            return `<p class="list-item"><span class="list-number">${listCounter++}. </span><span class="list-content"><span class="list-title">${title}</span>&nbsp;&nbsp;${content}</span></p>`;
          } else {
            return `<p class="list-item"><span class="list-number">${listCounter++}. </span><span class="list-content">${content}</span></p>`;
          }
        } else {
          isPreviousList = false;
          return `<p class="paragraph">${paragraph}</p>`;
        }
      })
      .join('');
  }  

  loadImages() {
    const numberOfImages = this.previewLength;

    if (numberOfImages) {
      for (let i = 1; i <= numberOfImages; i++) {
        this.imagePaths.push(`${this.previewFolder}/${i}.png`);
      }

      if (this.isPreviewGrid) {
        this.imagePaths_chunk = this.chunkImages(this.imagePaths);
      }
    }
  }

  chunkImages(images: string[]) {
    const columnCount = 3;
    let columns: string[][] = [];

    for (let i = 0; i < columnCount; i++) {
      columns[i] = images.filter((img, index) => index % columnCount === i);
    }

    return columns;
  }

  resetValues() {
    this.company = '';
    this.name = '';
    this.logo = '';
    this.roles = [];
    this.description = '';
    this.buttonTitle = '';
    this.buttonArrow = 1;
    this.buttonLink = '';
    this.background = '';
    this.color = '';
    this.description_2 = '';
    this.role_2 = '';
    this.technologies = [];
    this.previewFolder = '';
    this.previewLength = 0;
    this.imagePaths = [];
    this.totalScreens = 0;
    this.totalComponents = 0;
  }
}
