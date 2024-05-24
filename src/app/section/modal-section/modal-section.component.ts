import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Project } from 'src/app/model/project.model';

@Component({
  selector: 'app-modal-section',
  templateUrl: './modal-section.component.html',
  styleUrls: ['./modal-section.component.scss']
})
export class ModalSectionComponent {
  project!: Project;
  open: boolean = false;

  @ViewChild('modalElement') modalElement?: ElementRef;
  
  constructor() { }

  openPopup() {
    this.open = true;
    document.body.classList.add('no-scroll');
  }

  closePopup() {
    this.open = false;
    document.body.classList.remove('no-scroll');
    if (this.modalElement) {
      this.modalElement.nativeElement.scrollTop = 0;
    }
  }

  setProject(project: Project) {
    this.project = project;
  }
}
