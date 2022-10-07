import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  displayChildMessage: string | undefined;
  childMessage: any;

  constructor() { }

  ngOnInit(): void {
  }

  message = "Hello Child";
  @ViewChild(ChildComponent) child!:ChildComponent;

  viewChildMessage(){
    this.displayChildMessage = this.child.message;
  }

  receiveChildMessage(event:any){
    this.childMessage = event;
  }

}
