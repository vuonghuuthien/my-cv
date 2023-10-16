import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { BrowserComponent } from './browser/browser.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [ButtonComponent, BrowserComponent, CardComponent],
  imports: [CommonModule],
  exports: [ButtonComponent, BrowserComponent, CardComponent],
})
export class ElementModule {}
