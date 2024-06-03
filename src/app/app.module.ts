import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElementModule } from './element/element.module';
import { SectionModule } from './section/section.module';
import { DirectiveModule } from './directive/directive.module';
import { PageModule } from './page/page.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ElementModule,
    SectionModule,
    DirectiveModule,
    PageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
