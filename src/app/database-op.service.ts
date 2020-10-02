import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import {Courses} from '../Courses';
import {Category} from '../Category';
import { User } from 'src/User';
import {Constants} from './Constants'
@Injectable({
  providedIn: 'root'
})
export class DatabaseOpService {

  constructor(
    public firestore:AngularFirestore
  ) { }

  createNewCourse(course:Courses){
    course = {...course}
    return new Promise((resolve, reject) => {
      this.firestore.collection('Courses').add(course).then(() => {
        resolve();
      },
      (err) => {
        reject();
      }
      )
    })
  }


  getInstructors():Observable<User[]>{
    return this.firestore.collection<User>("User", ref => ref.where('roles', 'array-contains', Constants.USER_ROLE_INSTRUCTOR)).valueChanges({idField: 'id'}).pipe()
  }

  getAllCatalogues():Observable<Category[]> {
    return this.firestore.collection<Category>("Category").valueChanges({idField: 'id'}).pipe();
  }

  getAllCourses():Observable<Courses[]> {
    return this.firestore.collection<Courses>("Courses").valueChanges({idField: 'id'}).pipe();
  }

  getUserByUserId(userId:string):Observable<User>{
    return this.firestore.collection<User>("User").doc<User>(`User/${userId}`).valueChanges();
  }

  getCategoryByPrefixes(searchStr:string):Observable<Category[]>{
    return this.firestore.collection<Category>("Category", ref => ref.where('name', '>=', searchStr)).valueChanges({idField: 'id'}).pipe();
  }

  getInstructorByPrefixes(searchStr:string):Observable<User[]>{
    return this.firestore.collection<User>("User", ref => {
      let query = ref.where('name', '>=', searchStr);
      query = query.where('roles', 'array-contains', Constants.USER_ROLE_INSTRUCTOR)
      return query
    }).valueChanges({idField: 'id'}).pipe();
  }

  getCourseByCourseName(searchStr:string):Observable<Courses[]>{
    return this.firestore.collection<Courses>("Courses", ref => ref.where('title', '>=', searchStr)).valueChanges({idField: 'id'}).pipe();
  }

  getCourseByCategoryId(categoryId:string):Observable<Courses[]>{
    return this.firestore.collection<Courses>("Courses", ref => ref.where('category_ids', 'array-contains', categoryId)).valueChanges({idField: 'id'}).pipe();
  }

  getCourseByInstructorId(instructorId:string):Observable<Courses[]>{
    return this.firestore.collection<Courses>("Courses", ref => ref.where('instructor_ids', 'array-contains', instructorId)).valueChanges({idField: 'id'}).pipe();
  }


}
