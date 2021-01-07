import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  slides = [
    { img: "http://www.oakvalleyinternationalschool.org/views/default/images/slider1.jpg" },
    { img: "http://www.oakvalleyinternationalschool.org/views/default/images/slider2.jpg" },
    { img: "http://www.oakvalleyinternationalschool.org/views/default/images/slider3.jpg" },
    { img: "http://www.oakvalleyinternationalschool.org/views/default/images/slider4.jpg" }
  ];
  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    // prevArrow: '<div class="class-to-style"><span class="fa fa-angle-left"></span><span class="sr-only">Prev</span></div>',

    // nextArrow: '<div class="class-to-style"><span class="fa fa-angle-right"></span><span class="sr-only">Next</span></div>',
    "arrows": true,
    "infinite": false
    // "autoplaySpeed": 1000
  };


  constructor() { }

  ngOnInit(): void {
  }

}
