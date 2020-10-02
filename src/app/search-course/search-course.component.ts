import { Component, OnInit } from '@angular/core';
import { Category } from 'src/Category';
import { DatabaseOpService } from '../database-op.service';
import { Constants } from '../Constants';
import { User } from 'src/User';
import { Courses } from 'src/Courses';

@Component({
  selector: 'app-search-course',
  templateUrl: './search-course.component.html',
  styleUrls: ['./search-course.component.scss']
})
export class SearchCourseComponent implements OnInit {

  searchedCategories:Category[] = [];
  searchedInstructors:User[] = [];
  searchedCourses:Courses[] = [];
  searchString:string;
  searchCriteria:string = Constants.SEARCH_BY_CATEGORY;
  constructor(
    public databaseOp:DatabaseOpService
  ) { }

  ngOnInit(): void {
  }

  searchCourse(){
    this.searchedCategories = [];
    this.searchedCourses = [];
    this.searchedInstructors = [];
    switch(this.searchCriteria) {
      case Constants.SEARCH_BY_CATEGORY: {
        this.databaseOp.getCategoryByPrefixes(this.searchString).subscribe(res => {
          this.searchedCategories = res;
        });
        break;
      }

      case Constants.SEARCH_BY_INSTRUCTOR: {
        this.databaseOp.getInstructorByPrefixes(this.searchString).subscribe(res => {
          this.searchedInstructors = res;
        });
        break;
      }

      case Constants.SEARCH_BY_NAME: {
        this.databaseOp.getCourseByCourseName(this.searchString).subscribe(res => {
          this.searchedCourses = res;
        });
        break;
      }
    }
  }

  clearAllSearchVariable() {
    this.searchedInstructors = [];
    this.searchedCategories = [];
  }



  

  



}
