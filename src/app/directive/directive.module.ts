import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParallaxScrollDirective } from './gsap/parallax-scroll.directive';
import { ParallaxLazyLoadDirective } from './parallax-lazy-load.directive';
import { ParallaxTextDirective } from './parallax-text.directive';
import { ParallaxLazyLoad2Directive } from './parallax-lazy-load2.directive';
import { ParallaxRotateDirective } from './gsap/parallax-rotate.directive';
import { ParallaxFadeInDirective } from './gsap/parallax-fade-in.directive';
import { ParallaxScaleDirective } from './gsap/parallax-scale.directive';
import { ParallaxBlurDirective } from './gsap/parallax-blur.directive';
import { ParallaxPinningDirective } from './gsap/parallax-pinning.directive';
import { ParallaxStaggerDirective } from './gsap/parallax-stagger.directive';
import { ParallaxBackgroundDirective } from './gsap/parallax-background.directive';
import { ParallaxTextRevealDirective } from './gsap/parallax-text-reveal.directive';
import { ParallaxTypingDirective } from './gsap/parallax-typing.directive';
import { ParallaxMovingDirective } from './gsap/parallax-moving.directive';
import { ParallaxScrollFullPageDirective } from './gsap/parallax-scroll-full-page.directive';
import { ParallaxFloatingDirective } from './gsap/parallax-floating.directive';

@NgModule({
  declarations: [
    ParallaxScrollDirective,
    ParallaxLazyLoadDirective,
    ParallaxTextDirective,
    ParallaxLazyLoad2Directive,
    ParallaxRotateDirective,
    ParallaxFadeInDirective,
    ParallaxScaleDirective,
    ParallaxBlurDirective,
    ParallaxPinningDirective,
    ParallaxStaggerDirective,
    ParallaxBackgroundDirective,
    ParallaxTextRevealDirective,
    ParallaxTypingDirective,
    ParallaxMovingDirective,
    ParallaxScrollFullPageDirective,
    ParallaxFloatingDirective,
  ],
  imports: [CommonModule],
  exports: [
    ParallaxScrollDirective,
    ParallaxLazyLoadDirective,
    ParallaxTextDirective,
    ParallaxLazyLoad2Directive,
    ParallaxRotateDirective,
    ParallaxFadeInDirective,
    ParallaxScaleDirective,
    ParallaxBlurDirective,
    ParallaxPinningDirective,
    ParallaxStaggerDirective,
    ParallaxBackgroundDirective,
    ParallaxTextRevealDirective,
    ParallaxTypingDirective,
    ParallaxMovingDirective,
    ParallaxScrollFullPageDirective,
    ParallaxFloatingDirective,
  ],
})
export class DirectiveModule {}
