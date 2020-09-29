import {User} from './User'

export class Courses {
    id:string;
    title:string;
    image_url:string;
    instructor_name:User;
    created_at:string;
    updated_at:string;
    category_ids:string[];
    duration:number;
    description:string;
    start_date:string;
}