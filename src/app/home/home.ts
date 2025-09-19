import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [NgOptimizedImage],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})

export class Home {
  //Sample image for home intro
  imageSample_1: string = '/sample_1.jpg';
  imageSample_2: string = '/sample_2.jpg';
  imageSample_3: string = '/sample_3.jpg';
  //#####################################//


}
