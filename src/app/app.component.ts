import { Component } from '@angular/core';
import { DatabaseOpService } from './database-op.service';
import { Constants } from './Constants';
import { Courses } from 'src/Courses';
import { Category } from 'src/Category';
import { UtilsService } from './utils.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'coursecatalog';
  allCourses:Courses[] = [];
  showDashboard = {
    addCourse: true
  }

  isScreenMobile:boolean = false;
  showCategoriesOnHover:boolean = false;
  allCategory:Category[] = [];

  arr = [1, 2, 3];
  constructor(
    public databaseOpService:DatabaseOpService,
    public utilService:UtilsService,
    public route:Router
  ){
    if(window.innerWidth < 568){
      this.isScreenMobile = true;
    }
  }

  ngOnInit() {
    this.getAllCategories();
  }

  showOptions(option:string){
    switch(option){
      case Constants.DASHBOARD_OPTION_ADD_COURSE_CODE: {
        this.showDashboard.addCourse = true;
      }
    }
  }

  showCategories(){
    this.showCategoriesOnHover = true;
  }
  
  hideCategories(){
    this.showCategoriesOnHover = false;
  }

  getAllCategories(){
    this.databaseOpService.getAllCatalogues().subscribe(res => {
      this.allCategory = res;
    })
  }

  onCategoryClick(category:Category){
    this.utilService.onCategorySelectEvent.next({
      category_id:category.id,
      category_name:category.name
    });
    
  }

  invertShowCategory(){
    this.showCategoriesOnHover = !this.showCategoriesOnHover
  }

  

  
  
}


