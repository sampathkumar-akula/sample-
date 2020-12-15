import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Teja';
  myArr = ['him','hers','yours','theirs'];
  test = 'chk';
  buttonStatus = true;
  testClass = "red";
  titleClasses = {
    'red': true,
    'large-title': true
  }
  myEvent(ts:any) {
    if(ts === 'chk'){
      this.testClass = "green";

      alert(ts);

    }
    else
    alert("COndition not satisfied")
  }
}
