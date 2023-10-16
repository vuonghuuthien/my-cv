import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() icon: any = `<span class="material-symbols-rounded">home</span>`;
  @Input() text: string = 'Button';
}
