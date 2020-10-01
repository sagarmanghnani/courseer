import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Courses } from 'src/Courses';
import { User } from 'src/User';
import { Constants } from '../Constants';

@Component({
  selector: 'app-select-course',
  templateUrl: './select-course.component.html',
  styleUrls: ['./select-course.component.scss']
})
export class SelectCourseComponent implements OnInit {

  @Input() showCourse:Courses;
  @Input() instructorInfo:User[];
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if(changes && changes['showCourse'] && changes['showCourse'].currentValue){
      this.showCourse = changes['showCourse'].currentValue
    }

    if(changes && changes['instructorInfo'] && changes['instructorInfo'].currentValue){
      this.instructorInfo = changes['instructorInfo'].currentValue
    }
  }

  ngOnInit(): void {
  }

  getCourseImageSource(){
    if(this.showCourse.image_url){
      return this.showCourse.image_url
    }return Constants.DUMMY_IMAGE_URL;
  }

  getInstructorNames(){
    let str = '';
    for (const instructor of this.instructorInfo) {
      str = `${str} ,${instructor.name}`;
    }
    return str;
  }

}
