import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from "@angular/fire"
import { AngularFirestoreModule } from "@angular/fire/firestore"
import { environment } from 'src/environments/environment';
import {DatabaseOpService} from './database-op.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateCourseComponent } from './create-course/create-course.component'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from  '@angular/material/icon'
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatCardModule} from  '@angular/material/card'
// import { MatNativeDateModule } from '@angular/material/core';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input'
import {MatSelectModule} from '@angular/material/select'
import { MatButtonModule } from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar'
import {MatSidenavModule} from '@angular/material/sidenav';
import { SearchCoursesComponent } from './search-courses/search-courses.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { SelectCourseComponent } from './select-course/select-course.component';
import { ShowCoursesComponent } from './show-courses/show-courses.component';
import { SearchCourseComponent } from './search-course/search-course.component';
import { ClarityModule } from '@clr/angular';
@NgModule({
  declarations: [
    AppComponent,
    CreateCourseComponent,
    SearchCoursesComponent,
    SelectCourseComponent,
    ShowCoursesComponent,
    SearchCourseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    CommonModule,
    MatCardModule,
    MatDatepickerModule, 
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatCheckboxModule,
    ClarityModule
  ],
  providers: [
    DatabaseOpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
