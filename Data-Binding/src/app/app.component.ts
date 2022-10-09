import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Data-Binding';
  message = 'Welcome to Data-Binding Tutorial';
  text: any;
  bindValue(value: any){
    this.text = value;
  }
  name:any;
}
