import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { BrowserComponent } from './browser/browser.component';
import { CardComponent } from './card/card.component';
import { TerminalComponent } from './terminal/terminal.component';
import { BgBubblesComponent } from './bg-bubbles/bg-bubbles.component';
import { TruckComponent } from './truck/truck.component';
import { DeliveryTruckAnimationComponent } from './delivery-truck-animation/delivery-truck-animation.component';
import { CheckboxCircleAnimationComponent } from './checkbox-circle-animation/checkbox-circle-animation.component';
import { CheckboxCircleAnimationProComponent } from './checkbox-circle-animation-pro/checkbox-circle-animation-pro.component';
import { PinAnimationComponent } from './pin-animation/pin-animation.component';

@NgModule({
  declarations: [
    ButtonComponent,
    BrowserComponent,
    CardComponent,
    TerminalComponent,
    BgBubblesComponent,
    TruckComponent,
    DeliveryTruckAnimationComponent,
    CheckboxCircleAnimationComponent,
    CheckboxCircleAnimationProComponent,
    PinAnimationComponent,
  ],
  imports: [CommonModule],
  exports: [
    ButtonComponent,
    BrowserComponent,
    CardComponent,
    TerminalComponent,
    BgBubblesComponent,
    TruckComponent,
    DeliveryTruckAnimationComponent,
    CheckboxCircleAnimationComponent,
    CheckboxCircleAnimationProComponent,
    PinAnimationComponent,
  ],
})
export class ElementModule {}
