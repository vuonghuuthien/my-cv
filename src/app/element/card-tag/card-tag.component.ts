import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-tag',
  templateUrl: './card-tag.component.html',
  styleUrls: ['./card-tag.component.scss'],
})
export class CardTagComponent {
  @Input() style = 1;
  @Input() linkIcon = '';
  @Input() bgIcon = '';
  @Input() linkAvatar = '';
  @Input() contentTitle = '';
  @Input() contentDescription = '';
  @Input() contentList: string[] = [];
  @Input() contentButton = '';
  @Input() bgButton = '';
  @Input() colorButton = '';
}
