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
import { ShimmerLoadingEffectComponent } from './shimmer-loading-effect/shimmer-loading-effect.component';
import { SliderAnimationComponent } from './slider-animation/slider-animation.component';
import { BoxAnimationComponent } from './box-animation/box-animation.component';
import { ParallaxThreeItemComponent } from './parallax-three-item/parallax-three-item.component';
import { ParallaxThreeCardComponent } from './parallax-three-card/parallax-three-card.component';
import { ScrollDownButtonComponent } from './scroll-down-button/scroll-down-button.component';
import { RollingTextAnimationComponent } from './rolling-text-animation/rolling-text-animation.component';
import { RotatingTextAnimationComponent } from './rotating-text-animation/rotating-text-animation.component';
import { SliderCardInfoAnimationComponent } from './slider-card-info-animation/slider-card-info-animation.component';
import { FormsModule } from '@angular/forms';
import { CardWorkComponent } from './card-work/card-work.component';
import { CardTagComponent } from './card-tag/card-tag.component';
import { CardRoleComponent } from './card-role/card-role.component';
import { BgShapeDepthComponent } from './bg-shape-depth/bg-shape-depth.component';  // Import FormsModule
import { DirectiveModule } from '../directive/directive.module';

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
    ShimmerLoadingEffectComponent,
    SliderAnimationComponent,
    BoxAnimationComponent,
    ParallaxThreeItemComponent,
    ParallaxThreeCardComponent,
    ScrollDownButtonComponent,
    RollingTextAnimationComponent,
    RotatingTextAnimationComponent,
    SliderCardInfoAnimationComponent,
    CardWorkComponent,
    CardTagComponent,
    CardRoleComponent,
    BgShapeDepthComponent,
  ],
  imports: [
    CommonModule,
    FormsModule, // Add FormsModule here
    DirectiveModule,
  ],
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
    ShimmerLoadingEffectComponent,
    SliderAnimationComponent,
    BoxAnimationComponent,
    ParallaxThreeItemComponent,
    ParallaxThreeCardComponent,
    ScrollDownButtonComponent,
    RollingTextAnimationComponent,
    RotatingTextAnimationComponent,
    SliderCardInfoAnimationComponent,
    CardWorkComponent,
    CardTagComponent,
    CardRoleComponent,
    BgShapeDepthComponent,
  ],
})
export class ElementModule {}
