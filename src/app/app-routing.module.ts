import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkPageComponent } from './page/work-page/work-page.component';
import { AboutMeComponent } from './page/about-me/about-me.component';
import { MyCVComponent } from './page/my-cv/my-cv.component';

const routes: Routes = [
  { path: '', component: WorkPageComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'my-cv', component: MyCVComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
