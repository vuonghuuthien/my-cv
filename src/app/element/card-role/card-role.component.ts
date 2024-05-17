import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-role',
  templateUrl: './card-role.component.html',
  styleUrls: ['./card-role.component.scss'],
})
export class CardRoleComponent {
  @Input() linkAvatar = '';
  @Input() contentTitle = '';
  @Input() contentExperience = '1+ Year Experience';
  @Input() contentDescription = '';
  @Input() skillList: string[] = [];

  getBackgroundStyle() {
    return {
      background: `linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 23%,
        rgba(0, 0, 0, 0.4) 79.5%,
        rgba(0, 0, 0, 0.85) 90%
      ), url(${this.linkAvatar})`,
      'background-size': 'cover',
      'background-position': 'center',
    };
  }
}
