import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

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

  message = "Hello Parent";

  @Output() messageEvent = new EventEmitter();

  sendMessage(){
    this.messageEvent.emit('Hi Parent');
  }
}
