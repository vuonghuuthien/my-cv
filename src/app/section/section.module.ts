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
import { CommunitySectionComponent } from './community-section/community-section.component';
import { CommunityContentSectionComponent } from './community-content-section/community-content-section.component';
import { BusinessSectionComponent } from './business-section/business-section.component';
import { ModalSectionComponent } from './modal-section/modal-section.component';
import { FooterSectionComponent } from './footer-section/footer-section.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HeaderComponent,
    HeroSectionComponent,
    HeroSection2Component,
    HeroSection3Component,
    WorkSectionComponent,
    LeftBarSectionComponent,
    AboutMeSectionComponent,
    CommunitySectionComponent,
    CommunityContentSectionComponent,
    BusinessSectionComponent,
    ModalSectionComponent,
    FooterSectionComponent,
  ],
  imports: [
    CommonModule,
    ElementModule,
    DirectiveModule,
    BrowserModule,
    HttpClientModule,
  ],
  exports: [
    HeaderComponent,
    HeroSectionComponent,
    HeroSection2Component,
    HeroSection3Component,
    WorkSectionComponent,
    LeftBarSectionComponent,
    AboutMeSectionComponent,
    CommunitySectionComponent,
    CommunityContentSectionComponent,
    BusinessSectionComponent,
    ModalSectionComponent,
    FooterSectionComponent,
  ],
})
export class SectionModule {}
