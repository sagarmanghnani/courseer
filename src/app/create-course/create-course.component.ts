import { Component, OnInit } from '@angular/core';
import { Courses } from 'src/Courses';
import {UtilsService} from '../utils.service'
import { DatabaseOpService } from '../database-op.service';
import { User } from 'src/User';
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
  instructors:User[] = [];
  ngOnInit(): void {
    this.getInstructors();
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

  

  getInstructors(){
    this.databaseOp.getInstructors().subscribe(res => {
      this.instructors = res;
    })
  }




}
