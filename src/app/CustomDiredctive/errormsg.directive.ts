import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appErrormsg]'
})
export class ErrormsgDirective implements OnInit{
  a:any= "string"
  constructor(private element:ElementRef) { 
    console.log(element)
  }
  ngOnInit(): void {
    if(this.a == "string"){
      this.element.nativeElement.style.color= "red";
      this.element.nativeElement.style.backgroundColor="yellow";
    }
  }
}
