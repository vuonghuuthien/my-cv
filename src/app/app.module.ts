import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElementModule } from './element/element.module';
import { SectionModule } from './section/section.module';
import { DirectiveModule } from './directive/directive.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ElementModule,
    SectionModule,
    DirectiveModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
