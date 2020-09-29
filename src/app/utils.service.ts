import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  public static fromDateToUserReadable(date:Date){
    let year = date.getFullYear();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    return `${year}-${month}-${day}`;
  }
}
