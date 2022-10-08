import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  childMessage: any;
  childsmessage: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  message = "Hello Child";
  receiveChildMessage(event:any){
    this.childMessage = event;
  }

  @ViewChild(ChildComponent) child!:ChildComponent;
  viewChildMessage(){
    this.childsmessage = this.child.message;
  }
}