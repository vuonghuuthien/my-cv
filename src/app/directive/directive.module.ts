import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParallaxScrollDirective } from './parallax-scroll.directive';
import { ParallaxLazyLoadDirective } from './parallax-lazy-load.directive';

@NgModule({
  declarations: [ParallaxScrollDirective, ParallaxLazyLoadDirective],
  imports: [CommonModule],
  exports: [ParallaxScrollDirective, ParallaxLazyLoadDirective],
})
export class DirectiveModule {}
