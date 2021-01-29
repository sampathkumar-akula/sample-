import { Component, OnInit,Output,EventEmitter,ViewChild,AfterViewInit } from '@angular/core';
import { Componenet1Component} from '../componenet1/componenet1.component';
import { from } from 'rxjs';
import {HomeService} from '../home.service';
import {Book} from '../book';
import { ChildActivationEnd } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  message:string="Child to parent"
  @Output() messageEvent=new EventEmitter();
  // slides = [
  //   { img: "http://www.oakvalleyinternationalschool.org/views/default/images/slider1.jpg" },
  //   { img: "http://www.oakvalleyinternationalschool.org/views/default/images/slider2.jpg" },
  //   { img: "http://www.oakvalleyinternationalschool.org/views/default/images/slider3.jpg" },
  //   { img: "http://www.oakvalleyinternationalschool.org/views/default/images/slider4.jpg" }
  // ];
  // slideConfig = {
  //   "slidesToShow": 1,
  //   "slidesToScroll": 1,
  //   "arrows": true,
  //   "infinite": true,
  //   "autoplay":true,
  //   "autoplaySpeed": 2000
  // };
homedata:any=[]

  constructor(private homeservice:HomeService) { }
  sendMessage(){
    this.messageEvent.emit(this.message)
  }

  ngOnInit(): void {
// this.books=this.homeservice.getbook()
this.homeservice.getData().subscribe((data) => {this.homedata=data});
  }

}
// export class HomeComponent implements AfterViewInit{()
//   @ViewChild(Componenet1Component) Child;
//   constructor() { }

//   message:string;

//   ngAfterViewInit() {
//     this.message = this.child.message
// }