import { Component, signal } from '@angular/core';



@Component({
  selector: 'app-root',
  imports: [],

  templateUrl: './app.html',
  styleUrl: './app.scss',

})

export class App {
  protected readonly title = signal('AizenSales');
  headOne = "Developers at work, please wait!";
  headThree = "We are working hard to launch our new website. Stay tuned for updates!";
  pageText = "Our website is currently under construction. We apologize for any inconvenience and appreciate your patience as we work to bring you a better experience.";
  
}
