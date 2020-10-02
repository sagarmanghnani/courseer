import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchCourseComponent } from './search-course/search-course.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'search-courses'
  },
  {
    path: 'search-courses',
    component: SearchCourseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
