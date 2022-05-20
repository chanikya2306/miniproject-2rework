import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  
  displayMessage:any;
  r_message:any;
  sub_display:any;
  sub_r_messege:any;
  mul_send_display:any;
  mul_r_message:any;
  div_send_dispaly:any;
  div_r_message:any;

  constructor() { }
  sendMessage(add:any){
    (add!==undefined && add!== null) ? this.displayMessage = add:null;
    console.log(this.displayMessage);
  }
  receiveMessage(){
      return this.r_message = this.displayMessage
  }
  subSendMessage(sub:any){
    (sub!==undefined && sub!== null) ? this.sub_display = sub:null;
    console.log(this.sub_display);
  }
  receiveSubMessage(){
      return this.sub_r_messege = this.sub_display
  }
  mulSendMessage(mul:any){
    (mul!==undefined && mul!== null) ? this.mul_send_display = mul:null;
    console.log(this.mul_send_display);
  }
  receiveMulMessage(){
    return this.mul_r_message = this.mul_send_display;
  }
  divSendMessege(div:any){
    (div!==undefined && div!== null) ? this.div_send_dispaly = div:null;
    console.log(this.div_send_dispaly);
  }
  receiveDivMessage(){
    return this.div_r_message = this.div_send_dispaly
  }
}
