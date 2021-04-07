import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appName = 'Angular Playground';
  name = 'Rubem';
  getName() {
    return this.name
  };
  object = {
    name: 'Lúcia',
    age: 50
  };
  array = ['Rubem', 'Gabriel', 'Lúcia'];
  siteUrl = window.location.href
}
