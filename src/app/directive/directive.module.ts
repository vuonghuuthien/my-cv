import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParallaxScrollDirective } from './parallax-scroll.directive';
import { ParallaxLazyLoadDirective } from './parallax-lazy-load.directive';
import { ParallaxTextDirective } from './parallax-text.directive';
import { ParallaxLazyLoad2Directive } from './parallax-lazy-load2.directive';

@NgModule({
  declarations: [
    ParallaxScrollDirective,
    ParallaxLazyLoadDirective,
    ParallaxTextDirective,
    ParallaxLazyLoad2Directive,
  ],
  imports: [CommonModule],
  exports: [
    ParallaxScrollDirective,
    ParallaxLazyLoadDirective,
    ParallaxTextDirective,
    ParallaxLazyLoad2Directive,
  ],
})
export class DirectiveModule {}
