import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() childMessage?: string;
  constructor() { }
  

  ngOnInit(): void {
  }

}
