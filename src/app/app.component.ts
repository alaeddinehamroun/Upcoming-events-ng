import { Component } from '@angular/core';
import { AuthService } from './user/auth.service';

@Component({
  selector: 'app-root',
  template: `
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private auth: AuthService){}

  ngOnInit(){
    this.auth.checkAuthenticationStatus();
  }
}
