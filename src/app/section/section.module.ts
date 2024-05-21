import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementModule } from '../element/element.module';
import { DirectiveModule } from '../directive/directive.module';
import { HeaderComponent } from './header/header.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { HeroSection2Component } from './hero-section-2/hero-section-2.component';
import { HeroSection3Component } from './hero-section-3/hero-section-3.component';
import { WorkSectionComponent } from './work-section/work-section.component';
import { LeftBarSectionComponent } from './left-bar-section/left-bar-section.component';
import { AboutMeSectionComponent } from './about-me-section/about-me-section.component';
import { Header2Component } from './header-2/header-2.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HeroSectionComponent,
    HeroSection2Component,
    HeroSection3Component,
    WorkSectionComponent,
    LeftBarSectionComponent,
    AboutMeSectionComponent,
    Header2Component,
  ],
  imports: [CommonModule, ElementModule, DirectiveModule],
  exports: [
    HeaderComponent,
    HeroSectionComponent,
    HeroSection2Component,
    HeroSection3Component,
    WorkSectionComponent,
    LeftBarSectionComponent,
    AboutMeSectionComponent,
    Header2Component,
  ],
})
export class SectionModule {}
