import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss']
})
export class LoginformComponent implements OnInit {
  loginError: any;
  username: any;
  showmsg:any;


  constructor() { }

  ngOnInit(): void {
  }

  submitForm(form: any) {
    if (form.form.value.email != "suresh@gmail.com" && form.form.value.password != "ksc@123") {
      // window.alert("Please Enter Your Corrct User Name And Password")
      this.loginError = "User Does Not Exist!"
      
    }
    else if (form.form.value.email == "" && form.form.value.password == "ksc@123") {
      // window.alert("Enter Your Email ID!")
      this.loginError = "Enter Your Email ID!"
    
    }
    else if (form.form.value.email == "suresh@gmail.com" && form.form.value.password == "") {
      // window.alert("Enter Your  Password!")
      this.loginError = "Enter Your  Password!"
   
    }
    else if (form.form.value.email != "suresh@gmail.com" && form.form.value.password == "ksc@123") {
      // window.alert("Your Email Id Is Wrong!!")
      this.loginError = "Your Email Id Is Wrong!"
   
    }
    else if (form.form.value.email == "suresh@gmail.com" && form.form.value.password != "ksc@123") {
      // window.alert("Your Password Is Wrong!")
      this.loginError = "Your Password Is Wrong!"

    }
    else if (form.form.value.email == "suresh@gmail.com" && form.form.value.password == "ksc@123") {
      // window.alert("Login Successfull")
      window.alert("Login Successfull");
      this.showmsg=true
      console.log(form);
      localStorage.setItem("email", form.value.email);
      localStorage.setItem("password", form.value.password);
      this.username = localStorage.getItem('email');
    }
    else {
      return console.log(form);
    }

  }

}
