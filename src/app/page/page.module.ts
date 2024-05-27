import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkPageComponent } from './work-page/work-page.component';
import { SectionModule } from '../section/section.module';
import { ElementModule } from '../element/element.module';
import { AboutMeComponent } from './about-me/about-me.component';
import { MyCVComponent } from './my-cv/my-cv.component';



@NgModule({
  declarations: [
    WorkPageComponent,
    AboutMeComponent,
    MyCVComponent
  ],
  imports: [
    CommonModule,
    SectionModule,
    ElementModule
  ],
  exports: [
    WorkPageComponent,
    AboutMeComponent,
    MyCVComponent
  ]
})
export class PageModule { }
