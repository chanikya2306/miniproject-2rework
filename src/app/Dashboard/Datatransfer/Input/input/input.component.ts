import { Component, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() receviemsg:any;
  @Input() massegeEvent = new EventEmitter<any>();
  data:any = "passing from InputComponent to Dashboard Component";
  constructor() { }

  ngOnInit(): void {
  }
  sendingData(){
    this.massegeEvent.emit(this.data)
  }
}
