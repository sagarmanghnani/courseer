import { Component } from '@angular/core';
import { DatabaseOpService } from './database-op.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'coursecatalog';

  constructor(
    public databaseOpService:DatabaseOpService
  ){}

  ngOnInit() {
    
  }
  
}


