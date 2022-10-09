import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Directives';
  receivedChildMessage: any;

  constructor() { }

  ngOnInit(): void {
  }

  display = true;
  animals = ["Cat", "Dog", "Lion", "Tiger"];
  sucessClass = "text-sucess";
  hasError = true;
  isSpecial = false;
  messageClasses = {
    "text-sucess" : !this.hasError,
    "text-danger" : this.hasError,
    "text-special" : this.isSpecial
  }
  highlightColor = "brown";
  textStyle ={
    color:"blue",
    fontStyle:"italic"
  }
}
