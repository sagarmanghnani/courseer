import { Injectable } from '@angular/core';
import * as moment from 'moment-timezone'
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  onCategorySelectEvent:Subject<any> = new Subject();
  constructor(
    public snackBar:MatSnackBar
  ) { }

  public static fromDateToUserReadable(date:Date){
    let year = date.getFullYear();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    return `${year}-${month}-${day}`;
  }

  public static sendUtcTime(date){
    return moment.utc(date).format('YYYY-MM-DD[T]HH:mm:ss');
  }

  public static currentDateTime(){
    return moment().utc().format('YYYY-MM-DD[T]HH:mm:ss')
  }

  public static prettyPrintDateTime(dateTime:string){
    return moment(dateTime, 'YYYY-MM-DD[T]HH:mm:ss').format("MMM Do YY")
  }

  public openSnackBar(message){
    this.snackBar.open(message, null, {
      duration:2000
    });
  }

}
