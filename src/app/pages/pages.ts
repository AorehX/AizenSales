import {Component} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-pages',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './pages.html',
  styleUrl: './pages.scss'
})

export class Pages {
  // firstImage: string = '/Austin_Texas_A/a.jpg';

  // Sections for the house to display
  austinA: any [] = [
    {
      images: {
        imageA: '/Austin_Texas_A/a.jpg',
        imageB: '/Austin_Texas_A/b.jpg',
        imageC: '/Austin_Texas_A/c.jpg',
        imageD: '/Austin_Texas_A/d.jpg',
        imageE: '/Austin_Texas_A/e.jpg',
        imageF: '/Austin_Texas_A/f.jpg',
        imageG: '/Austin_Texas_A/g.jpg',
        imageH: '/Austin_Texas_A/h.jpg',
      },
      title: 'Modern Villa',
      price: '$250,000',
      details: '3 beds, 2 baths, swimming pool'
    }
  ]

  selectedHouse: any = null;

  selectHouse() {
    this.selectedHouse = this.austinA;
  }

  openModal(house: any) {
    this.selectedHouse = house;
  }

  closeModal() {
    this.selectedHouse = null;
  }
}
