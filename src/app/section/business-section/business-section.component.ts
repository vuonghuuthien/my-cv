import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from 'src/app/model/project.model';
import { ModalSectionComponent } from '../modal-section/modal-section.component';


@Component({
  selector: 'app-business-section',
  templateUrl: './business-section.component.html',
  styleUrls: ['./business-section.component.scss'],
})

export class BusinessSectionComponent implements OnInit {
  @ViewChild('modal') modal!: ModalSectionComponent;

  projects: Project[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Project[]>('/assets/data/projects.json').subscribe(
      (data) => {
        this.projects = data;
      },
      (error) => {
        console.error('Error loading projects data', error);
      }
    );
  }

  openModal(project: Project) {
    this.modal.openPopup();
    this.modal.setProject(project);
  }
}
