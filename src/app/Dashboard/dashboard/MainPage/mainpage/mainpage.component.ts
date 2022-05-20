import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {
  @Input() receviemsg:any
  constructor() { }

  ngOnInit(): void {
  }

}
