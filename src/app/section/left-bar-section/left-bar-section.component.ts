import { Component } from '@angular/core';

@Component({
  selector: 'app-left-bar-section',
  templateUrl: './left-bar-section.component.html',
  styleUrls: ['./left-bar-section.component.scss']
})
export class LeftBarSectionComponent {
  socials = [
    { label: 'fb' },
    { label: 'be' },
    { label: 'in' },
  ];

  roles = [
    { label: 'designer' },
    { label: 'developer' },
    { label: 'animator' },
  ];
}
