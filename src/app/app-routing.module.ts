import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchCourseComponent } from './search-course/search-course.component';
import { CreateCourseComponent } from './create-course/create-course.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'browse-courses'
  },
  {
    path: 'browse-courses',
    component: SearchCourseComponent
  },
  {
    path: 'create-courses',
    component: CreateCourseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
