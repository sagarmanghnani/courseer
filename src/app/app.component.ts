import { Component } from '@angular/core';
import { DatabaseOpService } from './database-op.service';
import { Constants } from './Constants';
import { Courses } from 'src/Courses';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'coursecatalog';
  allCourses:Courses[] = [];
  showDashboard = {
    addCourse: true
  }
  constructor(
    public databaseOpService:DatabaseOpService
  ){}

  ngOnInit() {
    
  }

  showOptions(option:string){
    switch(option){
      case Constants.DASHBOARD_OPTION_ADD_COURSE_CODE: {
        this.showDashboard.addCourse = true;
      }
    }
  }

  
  
}


