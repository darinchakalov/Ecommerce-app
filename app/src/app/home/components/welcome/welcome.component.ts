import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent {
  constructor() {}

  scroll(selector: string) {
    const element = document.querySelector(selector);
    console.log(element);

    element ? element.scrollIntoView({ behavior: 'smooth' }) : null;
  }
}
