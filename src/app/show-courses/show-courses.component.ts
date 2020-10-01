import { Component, OnInit } from '@angular/core';
import { DatabaseOpService } from '../database-op.service';
import { User } from 'src/User';
import { Courses } from 'src/Courses';

@Component({
  selector: 'app-show-courses',
  templateUrl: './show-courses.component.html',
  styleUrls: ['./show-courses.component.scss']
})
export class ShowCoursesComponent implements OnInit {
  userMap:Map<string, User> = new Map();
  allCourses:Courses[] = [];
  constructor(
    public databaseOpService:DatabaseOpService
  ) { }

  ngOnInit(): void {
    this.getAllCourses();
    this.getAllInstructors();
  }


  getAllCourses(){
    this.databaseOpService.getAllCourses().subscribe(res => {
      this.allCourses = res;
    })
  }

  getAllInstructors(){
    this.databaseOpService.getInstructors().subscribe(res => {
      if(res && res.length){
        res.forEach(user => {
          this.userMap.set(user.id, user);
        })
      }
    })
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


}
