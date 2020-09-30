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
    return this.firestore.collection<User>("User", ref => ref.where('roles', 'array-contains', Constants.USER_ROLE_CONSTRUCTOR)).valueChanges({idField: 'id'}).pipe()
  }

  getAllCatalogues():Observable<Category[]> {
    return this.firestore.collection<Category>("Category").valueChanges({idField: 'id'}).pipe();
  }

}
