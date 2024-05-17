import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementModule } from '../element/element.module';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { HeaderComponent } from './header/header.component';
import { IntroduceSectionComponent } from './introduce-section/introduce-section.component';
import { WorkSectionComponent } from './work-section/work-section.component';
import { LeftBarSectionComponent } from './left-bar-section/left-bar-section.component';
import { AboutMeSectionComponent } from './about-me-section/about-me-section.component';

@NgModule({
  declarations: [
    HeroSectionComponent,
    HeaderComponent,
    IntroduceSectionComponent,
    WorkSectionComponent,
    LeftBarSectionComponent,
    AboutMeSectionComponent,
  ],
  imports: [CommonModule, ElementModule],
  exports: [
    HeroSectionComponent,
    HeaderComponent,
    IntroduceSectionComponent,
    WorkSectionComponent,
    LeftBarSectionComponent,
    AboutMeSectionComponent,
  ],
})
export class SectionModule {}
