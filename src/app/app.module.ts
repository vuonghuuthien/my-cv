import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Router, Event, NavigationEnd } from '@angular/router';  // Import thêm Event
import { filter } from 'rxjs/operators';  // Import thêm filter

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElementModule } from './element/element.module';
import { SectionModule } from './section/section.module';
import { DirectiveModule } from './directive/directive.module';
import { PageModule } from './page/page.module';

// Khai báo gtag như một hàm toàn cục
declare let gtag: Function;

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
    PageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(router: Router) {
    router.events.pipe(
      filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      gtag('config', 'G-SM7RFN6T2V', {
        'page_path': event.urlAfterRedirects
      });
    });
  }
}
