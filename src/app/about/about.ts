import {CommonModule, NgOptimizedImage} from '@angular/common';
import {Component} from '@angular/core';


@Component({
  selector: 'app-about',
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './about.html',
  styleUrls: ['./about.scss']
})


export class AboutComponent {
  image1: string = '/EstateWorkers/ManI.jpg';
  image2: string = '/EstateWorkers/WomanC.jpg';
  image3: string = '/EstateWorkers/ManD.jpg';

}
