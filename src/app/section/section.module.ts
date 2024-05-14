import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementModule } from '../element/element.module';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { HeaderComponent } from './header/header.component';
import { IntroduceSectionComponent } from './introduce-section/introduce-section.component';
import { WorkSectionComponent } from './work-section/work-section.component';

@NgModule({
  declarations: [
    HeroSectionComponent,
    HeaderComponent,
    IntroduceSectionComponent,
    WorkSectionComponent,
  ],
  imports: [CommonModule, ElementModule],
  exports: [
    HeroSectionComponent,
    HeaderComponent,
    IntroduceSectionComponent,
    WorkSectionComponent,
  ],
})
export class SectionModule {}
