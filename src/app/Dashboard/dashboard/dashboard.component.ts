import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/Shared Services/shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  displayvalues:any;
  subvalues:any;
  mulvalues:any;
  divvalues:any;
  sendMsg:any = "sending data from dashboard to inputComponent";
  receveoutput:any;
  constructor(private sharedServices: SharedService) { }

  ngOnInit(): void {
    this.displayvalues =this.sharedServices.receiveMessage();
    this.subvalues =this.sharedServices.receiveSubMessage();
    this.mulvalues = this.sharedServices.receiveMulMessage();
    this.divvalues = this.sharedServices.receiveDivMessage();
  }

  receviemsgdata(event:any){
    this.receveoutput= event;
  }

}
