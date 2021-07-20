import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav-bar></nav-bar>
    <events-list></events-list>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-advanced-project';
}
