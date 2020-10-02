import { Component, OnInit } from '@angular/core';
import { Category } from 'src/Category';
import { DatabaseOpService } from '../database-op.service';
import { Constants } from '../Constants';
import { User } from 'src/User';
import { Courses } from 'src/Courses';
import { UtilsService } from '../utils.service';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';

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
  selectedCategoriesMap:Map<string, Category> = new Map();
  selectedInstructorsMap:Map<string, User> = new Map();
  userMap:Map<string, User> = new Map();
  searchedQuery:string[] = [];
  constructor(
    public databaseOp:DatabaseOpService,
    public utilService:UtilsService,
    public route:Router,
    private ngxService: NgxUiLoaderService
  ) { }

  ngOnInit(): void {
    this.getAllCourses();
    this.getAllInstructors();
    this.registerForBrowseCategory();
  }

  getAllInstructors(){
    this.ngxService.start();
    this.databaseOp.getInstructors().subscribe(res => {
      this.ngxService.stop();
      if(res && res.length){
        res.forEach(user => {
          this.userMap.set(user.id, user);
        })
      }
    },
    (err) => {
      this.ngxService.stop();
    }
    )
  }

  searchCourse(){
    this.searchedCategories = [];
    this.searchedCourses = [];
    this.searchedInstructors = [];
    this.searchedQuery = [];
    if(this.searchString){
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
    }else{
      this.getAllCourses();
    }
  }

  clearAllSearchVariable() {
    this.searchedInstructors = [];
    this.searchedCategories = [];
    this.searchedQuery = [];
  }

  onInstructorSelect(event){

  }

  onItemClick(itemId:string){
    this.searchedQuery = [];
    this.searchedQuery.push(this.searchString);
    switch (this.searchCriteria){
      case Constants.SEARCH_BY_INSTRUCTOR: {
        this.databaseOp.getCourseByInstructorId(itemId).subscribe(res => {
          this.searchedCourses = res;
          this.searchedInstructors = [];
        });
        break;
      }

      case Constants.SEARCH_BY_CATEGORY: {
        this.databaseOp.getCourseByCategoryId(itemId).subscribe(res => {
          this.searchedCourses = res;
          this.searchedCategories = [];
        });
        break;
      }
    }
  }

  getCourseInstructor(instructorIds:string[]){
    let user:User[] = [];
    for (const instructorId of instructorIds) {
      if(this.userMap.has(instructorId)){
        user.push(this.userMap.get(instructorId));
      }
    }
    return user;
  }

  getAllCourses(){
    this.ngxService.start();
    this.databaseOp.getAllCourses().subscribe(res => {
      this.ngxService.stop();
      this.searchedCourses = res;
    },
    (err) => {
      this.ngxService.stop();
    }
    )
  }

  registerForBrowseCategory(){
    this.utilService.onCategorySelectEvent.subscribe(categoryObj => {
      this.databaseOp.getCourseByCategoryId(categoryObj.category_id).subscribe(res => {
        this.route.navigate(['browse-courses']);
        this.searchedCourses = res;
        this.searchedQuery = [];
        this.searchedQuery.push(categoryObj.category_name);
      })
    })
  }
  
  }






  

  




