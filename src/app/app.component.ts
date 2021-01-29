import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  parentMessage="message from parent"
  constructor(){}
  // title = 'Sunny';
  // todaydate = new Date();  
  // jsonval = {name: 'Alex', age: '25', address:{a1: 'Paris', a2: 'France'}};  
  // months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun',  
  //   'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];  
  // myArr = ['him','hers','yours','theirs'];
  // test = 'chk';
  // buttonStatus = true;
  // testClass = "red";
  // titleClasses = {
  //   'red': true,
  //   'large-title': true
  // }
  // myEvent(ts:any) {
  //   if(ts === 'chk'){
  //     // this.testClass = "green";

  //     alert(ts);

  //   }
  //   else
  //   alert("COndition not satisfied")
  // }
message?:string;
receiveMessage($event:any){
  this.message= $event

}

}
