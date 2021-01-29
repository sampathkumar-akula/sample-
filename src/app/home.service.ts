import { Injectable } from '@angular/core';
import {Book} from './book';
import{HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HomeService {
getbook(){
var books:Book[]= [
    { "id": 1, "name": "HTML 5" },
    { "id": 2, "name": "CSS 3" },
    { "id": 3, "name": "Java Script" },
    { "id": 4, "name": "Ajax Programming" },
    { "id": 5, "name": "jQuery" },
    { "id": 6, "name": "Mastering Node.js" },
    { "id": 7, "name": "Angular JS 1.x" },
    { "id": 8, "name": "ng-book 2" },
    { "id": 9, "name": "Backbone JS" },
    { "id": 10, "name": "Yeoman" }
];
return books;
}

  constructor(private httpclient:HttpClient) { }
  getData(){
    return this.httpclient.get("../assets/json/home.json");
  }
}
