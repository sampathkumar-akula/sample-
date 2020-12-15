import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


forms = {
  'title': "PARADISE",
  'foot':"FOOTER",
  'list': [
  {
      "listkey": "Branches",
      "link": "https://www.sundayguardianlive.com/wp-content/uploads/2020/07/3-Dib-restaurant-losses-edited.jpg"
  },
  {
      "listkey": "About us",
      "link": "https://api.time.com/wp-content/uploads/2019/06/what-is-half-christmas-workaholics.jpg?w=800&quality=85"
  },
  {
      "listkey":"Contact Us",
      "link":"https://www.sapporo.co.uk/wp-content/uploads/2018/08/Christmas-decorations-iStock_000048591732_Small-768x484.jpg"
  },
{
      "listkey": "Home",
      "link": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Barbieri_-_ViaSophia25668.jpg/580px-Barbieri_-_ViaSophia25668.jpg"
  }
  ],
'id':['branches','aboutus','contactus','home']

}

previewUrl(displaylink:any, target:any) {
let div:any;
 div = document.getElementById(target);
div.innerHTML = '<iframe style="width:600px;height:350px;" frameborder="0" src="' + displaylink + '" />';
}
}