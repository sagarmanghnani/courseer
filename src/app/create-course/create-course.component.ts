import { Component, OnInit } from '@angular/core';
import { Courses } from 'src/Courses';
import {UtilsService} from '../utils.service'
import { DatabaseOpService } from '../database-op.service';
import { User } from 'src/User';
import { Category } from 'src/Category';
@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss']
})
export class CreateCourseComponent implements OnInit {

  constructor(
    public databaseOp:DatabaseOpService,
    public utilService:UtilsService
  ) { }
  createNewCourse:Courses = new Courses();
  allCategory:Category[] = [];
  instructors:User[] = [];
  selectedCategories:string[] = [];
  ngOnInit(): void {
    this.getInstructors();
    this.getAllCategories();
  }

  createCourse(){
    let utcDatetime = UtilsService.sendUtcTime(this.createNewCourse.created_at);
    this.createNewCourse.start_date = utcDatetime;
    this.createNewCourse.created_at = UtilsService.currentDateTime();
    this.createNewCourse.updated_at = UtilsService.currentDateTime();
    this.databaseOp.createNewCourse(this.createNewCourse).then(res => {
      this.utilService.openSnackBar("Course created successfully");
    })
  }

  getAllCategories(){
    this.databaseOp.getAllCatalogues().subscribe(res => {
      this.allCategory = res;
    })
  }

  getInstructors(){
    this.databaseOp.getInstructors().subscribe(res => {
      this.instructors = res;
    })
  }

  




}
