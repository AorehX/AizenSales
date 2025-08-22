import { Component, signal } from '@angular/core';
import { Navi } from "./navi/navi";
import { Footer } from "./footer/footer";

@Component({
  selector: 'app-root',
  imports: [Navi, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('AizenSales');
}
