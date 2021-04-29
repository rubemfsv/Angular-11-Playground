import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appName = 'Angular Playground';
  name = 'Rubem';
  getName(name: string) {
    alert(name)
  };
  object = {
    name: 'Lúcia',
    age: 50
  };
  array = ['Rubem', 'Gabriel', 'Lúcia'];
  siteUrl = window.location.href
  myEvent(event: any) {
    console.warn(event)
  };
  currentVal = "";
  getValue(val: any) {
    console.warn(val)
    this.currentVal = val;
  }
  disabledBox = true
  enableBox() {
    this.disabledBox = false;
  }
  show = "red"
  color = "blue"
  data = ['Rubem', 'Duda', 'Mateus', 'Mi']
  data_object = [
    {
      name: 'Rubem',
      age: '25',
      email: 'abc@email.com'
    },
    {
      name: 'Duda',
      age: '21',
      email: 'abc@email.com'
    },
    {
      name: 'Mi',
      age: '19',
      email: 'abc@email.com'
    },
    {
      name: 'Mateus',
      age: '24',
      email: 'abc@email.com'
    },
  ]
}
