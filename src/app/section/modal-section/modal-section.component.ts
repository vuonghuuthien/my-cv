import { Component, Input } from '@angular/core';
import { Project } from 'src/app/model/project.model';

@Component({
  selector: 'app-modal-section',
  templateUrl: './modal-section.component.html',
  styleUrls: ['./modal-section.component.scss']
})
export class ModalSectionComponent {
  project!: Project;
  open: boolean = false;
  
  constructor() { }

  openPopup() {
    this.open = true;
    document.body.classList.add('no-scroll');
  }

  closePopup() {
    this.open = false;
    document.body.classList.remove('no-scroll');
  }

  setProject(project: Project) {
    this.project = project;
  }
}
