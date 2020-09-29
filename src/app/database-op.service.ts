import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import {Courses} from '../Courses'
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
    return new Promise((resolve, reject) => {
      this.firestore.collection('Courses').add(course).then(() => {
        alert("Successfully added Course");
      },
      (err) => {
        alert(`Failed adding course ${err}`);
      }
      )
    })
  }


  getInstructors():Observable<User[]>{
    return this.firestore.collection<User>("User", ref => ref.where('roles', 'array-contains', Constants.USER_ROLE_CONSTRUCTOR)).valueChanges().pipe()
  }

}
