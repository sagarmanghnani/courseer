import { Component, OnInit } from '@angular/core';
import { Courses } from 'src/Courses';
import {UtilsService} from '../utils.service'
import { DatabaseOpService } from '../database-op.service';
@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss']
})
export class CreateCourseComponent implements OnInit {

  constructor(
    public databaseOp:DatabaseOpService
  ) { }
  createNewCourse:Courses = new Courses();
  ngOnInit(): void {
    this.getInstructors();
  }

  createCourse(){
    console.log(this.createNewCourse, "new course");
  }

  test(event){
    let date = new Date(event.value);
    this.createNewCourse.created_at = UtilsService.fromDateToUserReadable(date);
  }

  getInstructors(){
    this.databaseOp.getInstructors().subscribe(res => {
      console.log(res, "res");
    })
  }


}
