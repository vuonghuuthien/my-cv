import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { BrowserComponent } from './browser/browser.component';
import { CardComponent } from './card/card.component';
import { TerminalComponent } from './terminal/terminal.component';
import { BgBubblesComponent } from './bg-bubbles/bg-bubbles.component';
import { TruckComponent } from './truck/truck.component';

@NgModule({
  declarations: [
    ButtonComponent,
    BrowserComponent,
    CardComponent,
    TerminalComponent,
    BgBubblesComponent,
    TruckComponent,
  ],
  imports: [CommonModule],
  exports: [
    ButtonComponent,
    BrowserComponent,
    CardComponent,
    TerminalComponent,
    BgBubblesComponent,
    TruckComponent,
  ],
})
export class ElementModule {}
