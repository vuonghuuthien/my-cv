import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParallaxScrollDirective } from './parallax-scroll.directive';
import { ParallaxLazyLoadDirective } from './parallax-lazy-load.directive';
import { ParallaxTextDirective } from './parallax-text.directive';

@NgModule({
  declarations: [ParallaxScrollDirective, ParallaxLazyLoadDirective, ParallaxTextDirective],
  imports: [CommonModule],
  exports: [ParallaxScrollDirective, ParallaxLazyLoadDirective, ParallaxTextDirective],
})
export class DirectiveModule {}
