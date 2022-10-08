import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() parentMessage:any;
  @Output() messageEvent = new EventEmitter();
  sendMessage(){
    this.messageEvent.emit("Hello Parent");
  }
  message = "Hi Parent";
}