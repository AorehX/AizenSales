import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pages',
  imports: [
    NgOptimizedImage,
    FormsModule
  ],
  templateUrl: './pages.html',
  styleUrl: './pages.scss'
})

export class Pages {
  // Sections for the house to display
  houses: any[] = [
    {
      images: [
        '/Austin_Texas_A/a.jpg',
        '/Austin_Texas_A/b.jpg',
        '/Austin_Texas_A/c.jpg',
        '/Austin_Texas_A/d.jpg',
        '/Austin_Texas_A/e.jpg',
        '/Austin_Texas_A/f.jpg',
        '/Austin_Texas_A/g.jpg',
        '/Austin_Texas_A/h.jpg',
        '/Austin_Texas_A/i.jpg',
        '/Austin_Texas_A/j.jpg',
        '/Austin_Texas_A/k.jpg',
        '/Austin_Texas_A/l.jpg',
        '/Austin_Texas_A/m.jpg',
        '/Austin_Texas_A/n.jpg',
        '/Austin_Texas_A/o.jpg',
      ],

      owner: 'Serret Owen',
      title: 'Luxury Fashion',
      price: '$950,000',
      location: 'Austin, Texas',
      address: '5136 Big Fork Rd, Fort Worth, TX 76119',
      landMass: '3,976, sqft',
      details: '4 beds, 3 baths, Little Garden',
      showAllimages: false,
    },

    {
      images: [
        '/Austin_Texas_B/a.jpg',
        '/Austin_Texas_B/b.jpg',
        '/Austin_Texas_B/c.jpg',
        '/Austin_Texas_B/d.jpg',
        '/Austin_Texas_B/e.jpg',
        '/Austin_Texas_B/f.jpg',
        '/Austin_Texas_B/g.jpg',
        '/Austin_Texas_B/h.jpg',
        '/Austin_Texas_B/i.jpg',
        '/Austin_Texas_B/j.jpg',
        '/Austin_Texas_B/k.jpg',
        '/Austin_Texas_B/l.jpg',
        '/Austin_Texas_B/m.jpg',
        '/Austin_Texas_B/n.jpg',
        '/Austin_Texas_B/o.jpg',
      ],

      owner: 'Marry Peterson',
      title: 'Modern Luxury',
      price: '$810,000',
      location: 'Austin, Texas',
      address: '13451 Bullick Hollow Rd, Austin, TX 78726',
      landMass: '2,255, sqft',
      details: '3 beds, 2 baths, Resting Park',
      showAllimages: false,
    },

    {
      images: [
        '/Austin_Texas_C/a.jpg',
        '/Austin_Texas_C/b.jpg',
        '/Austin_Texas_C/c.jpg',
        '/Austin_Texas_C/d.jpg',
        '/Austin_Texas_C/e.jpg',
        '/Austin_Texas_C/f.jpg',
        '/Austin_Texas_C/g.jpg',
        '/Austin_Texas_C/h.jpg',
        '/Austin_Texas_C/i.jpg',
        '/Austin_Texas_C/j.jpg',
        '/Austin_Texas_C/k.jpg',
        '/Austin_Texas_C/l.jpg',
        '/Austin_Texas_C/m.jpg',
        '/Austin_Texas_C/n.jpg',
        '/Austin_Texas_C/o.jpg',
      ],

      owner: 'Fred Jackson',
      title: 'Modern Villa',
      price: '$715,000',
      location: 'Austin, AR',
      address: '50 Saddle Brook Cv, Austin, AR 72007',
      landMass: '3, 882 sgft',
      details: '4 beds, 4 baths, swimming pool',
      showAllimages: false,
    },

    {
      images: [
        '/Austin_Texas_D/a.jpg',
        '/Austin_Texas_D/b.jpg',
        '/Austin_Texas_D/c.jpg',
        '/Austin_Texas_D/d.jpg',
        '/Austin_Texas_D/e.jpg',
        '/Austin_Texas_D/f.jpg',
        '/Austin_Texas_D/g.jpg',
        '/Austin_Texas_D/h.jpg',
        '/Austin_Texas_D/i.jpg',
        '/Austin_Texas_D/j.jpg',
        '/Austin_Texas_D/k.jpg',
        '/Austin_Texas_D/l.jpg',
        '/Austin_Texas_D/m.jpg',
        '/Austin_Texas_D/n.jpg',
        //'/Austin_Texas_D/o.jpg',
      ],

      owner: 'Clark Timothy',
      title: 'Haven Condo',
      price: '$621,000',
      location: 'Los Angeles, CA',
      address: '2949 London St, Los Angeles, CA 90026',
      landMass: '2,589 sqft',
      details: '3 beds, 2 baths, Back garden',
      showAllimages: false,
    },

    {
      images: [
        '/Austin_Texas_E/a.jpg',
        '/Austin_Texas_E/b.jpg',
        '/Austin_Texas_E/c.jpg',
        '/Austin_Texas_E/d.jpg',
        '/Austin_Texas_E/e.jpg',
        '/Austin_Texas_E/f.jpg',
        '/Austin_Texas_E/g.jpg',
        '/Austin_Texas_E/h.jpg',
        '/Austin_Texas_E/i.jpg',
        '/Austin_Texas_E/j.jpg',
        '/Austin_Texas_E/k.jpg',
        '/Austin_Texas_E/l.jpg',
        '/Austin_Texas_E/m.jpg',
        '/Austin_Texas_E/n.jpg',
        '/Austin_Texas_E/o.jpg',
      ],

      owner: 'Abigail James',
      title: 'Paradise villa',
      price: '$425,000',
      location: 'Los Angeles, CA',
      address: '676 Shepard St APT 6, San Pedro, CA 90731',
      landMass: '2,526 sqft',
      details: '3 beds, 2 baths, swimming pool',
      showAllimages: false,
    },

    {
      images: [
        '/Austin_Texas_F/a.jpg',
        '/Austin_Texas_F/b.jpg',
        '/Austin_Texas_F/c.jpg',
        '/Austin_Texas_F/d.jpg',
        '/Austin_Texas_F/e.jpg',
        '/Austin_Texas_F/f.jpg',
        '/Austin_Texas_F/g.jpg',
        '/Austin_Texas_F/h.jpg',
        '/Austin_Texas_F/i.jpg',
        '/Austin_Texas_F/j.jpg',
        '/Austin_Texas_F/k.jpg',
        '/Austin_Texas_F/l.jpg',
        '/Austin_Texas_F/m.jpg',
        '/Austin_Texas_F/n.jpg',
        '/Austin_Texas_F/o.jpg',
      ],

      owner: 'Bright Steven',
      title: 'Spacious Haven',
      price: '$710,000',
      location: 'Los Angeles, CA',
      address: '13535 Bayliss Rd, Los Angeles, CA 90049',
      landMass: '4,852 sqft',
      details: '4 beds, 3 baths, swimming pool',
      showAllimages: false,
    },

    {
      images: [
        '/Austin_Texas_G/a.jpg',
        '/Austin_Texas_G/b.jpg',
        '/Austin_Texas_G/c.jpg',
        '/Austin_Texas_G/d.jpg',
        '/Austin_Texas_G/e.jpg',
        '/Austin_Texas_G/f.jpg',
        '/Austin_Texas_G/g.jpg',
        '/Austin_Texas_G/h.jpg',
        '/Austin_Texas_G/i.jpg',
        '/Austin_Texas_G/j.jpg',
        '/Austin_Texas_G/k.jpg',
        '/Austin_Texas_G/l.jpg',
        '/Austin_Texas_G/m.jpg',
        '/Austin_Texas_G/n.jpg',
        '/Austin_Texas_G/o.jpg',
      ],

      owner: 'George Albert',
      title: 'Joint Park',
      price: '$690,000',
      location: 'Florida',
      address: '4952 Creekside Park Ave, Orlando, FL 32811',
      landMass: '3,525 sqft',
      details: '3 beds, 2 baths, swimming pool',
      showAllimages: false,
    },

    {
      images: [
        '/Austin_Texas_H/a.jpg',
        '/Austin_Texas_H/b.jpg',
        '/Austin_Texas_H/c.jpg',
        '/Austin_Texas_H/d.jpg',
        '/Austin_Texas_H/e.jpg',
        '/Austin_Texas_H/f.jpg',
        '/Austin_Texas_H/g.jpg',
        '/Austin_Texas_H/h.jpg',
        '/Austin_Texas_H/i.jpg',
        '/Austin_Texas_H/j.jpg',
        '/Austin_Texas_H/k.jpg',
        '/Austin_Texas_H/l.jpg',
        '/Austin_Texas_H/m.jpg',
        '/Austin_Texas_H/n.jpg',
        '/Austin_Texas_H/o.jpg',
      ],

      owner: 'Bret Luw',
      title: 'Garden Sight',
      price: '$680,000',
      location: 'Oklahoma',
      address: '1040 Mabel C Fry Blvd, Yukon, OK 73099',
      landMass: '2,657 sqft',
      details: '3 beds, 3 baths, swimming pool',
      showAllimages: false,
    },

    {
      images: [
        '/Austin_Texas_I/a.jpg',
        '/Austin_Texas_I/b.jpg',
        '/Austin_Texas_I/c.jpg',
        '/Austin_Texas_I/d.jpg',
        '/Austin_Texas_I/e.jpg',
        '/Austin_Texas_I/f.jpg',
        '/Austin_Texas_I/g.jpg',
        '/Austin_Texas_I/h.jpg',
        '/Austin_Texas_I/i.jpg',
        '/Austin_Texas_I/j.jpg',
        '/Austin_Texas_I/k.jpg',
        '/Austin_Texas_I/l.jpg',
        '/Austin_Texas_I/m.jpg',
        '/Austin_Texas_I/n.jpg',
        '/Austin_Texas_I/o.jpg',
      ],

      owner: 'Johnson Muller',
      title: 'Spark Light',
      price: '$912,000',
      location: 'Ohio, CC',
      address: '7550 Brill Rd, Cincinnati, OH 45243',
      landMass: '3,657 sqft',
      details: '3 beds, 3 baths, swimming pool',
      showAllimages: false,
    },

    {
      images: [
        '/Austin_Texas_J/a.jpg',
        '/Austin_Texas_J/b.jpg',
        '/Austin_Texas_J/c.jpg',
        '/Austin_Texas_J/d.jpg',
        '/Austin_Texas_J/e.jpg',
        '/Austin_Texas_J/f.jpg',
        '/Austin_Texas_J/g.jpg',
        '/Austin_Texas_J/h.jpg',
        '/Austin_Texas_J/i.jpg',
        '/Austin_Texas_J/j.jpg',
        '/Austin_Texas_J/k.jpg',
        '/Austin_Texas_J/l.jpg',
        '/Austin_Texas_J/m.jpg',
        '/Austin_Texas_J/n.jpg',
        '/Austin_Texas_J/o.jpg',
      ],

      owner: 'Esther Clark',
      title: 'Classic Vile',
      price: '$765,000',
      location: 'Ohio',
      address: '69 Cook Ln, Chillicothe, OH 45601',
      landMass: '4,232 sqft',
      details: '3 beds, 2 baths, Open Field',
      showAllimages: false,
    },

    {
      images: [
        '/Austin_Texas_K/a.jpg',
        '/Austin_Texas_K/b.jpg',
        '/Austin_Texas_K/c.jpg',
        '/Austin_Texas_K/d.jpg',
        '/Austin_Texas_K/e.jpg',
        '/Austin_Texas_K/f.jpg',
        '/Austin_Texas_K/g.jpg',
        '/Austin_Texas_K/h.jpg',
        '/Austin_Texas_K/i.jpg',
        '/Austin_Texas_K/j.jpg',
        '/Austin_Texas_K/k.jpg',
        '/Austin_Texas_K/l.jpg',
        '/Austin_Texas_K/m.jpg',
        '/Austin_Texas_K/n.jpg',
        '/Austin_Texas_K/o.jpg',
      ],

      owner: 'Linda Murphy',
      title: 'City Hall',
      price: '$590,000',
      location: 'Ohio',
      address: '2295 Shenandoah Dr, Troy, OH 45373',
      landMass: '2,765 sqft',
      details: '3 beds, 2 baths, Back garden',
      showAllimages: false,
    },

    {
      images: [
        '/Austin_Texas_L/a.jpg',
        '/Austin_Texas_L/b.jpg',
        '/Austin_Texas_L/c.jpg',
        '/Austin_Texas_L/d.jpg',
        '/Austin_Texas_L/e.jpg',
        '/Austin_Texas_L/f.jpg',
        '/Austin_Texas_L/g.jpg',
        '/Austin_Texas_L/h.jpg',
        '/Austin_Texas_L/i.jpg',
        '/Austin_Texas_L/j.jpg',
        '/Austin_Texas_L/k.jpg',
        '/Austin_Texas_L/l.jpg',
        '/Austin_Texas_L/m.jpg',
        '/Austin_Texas_L/n.jpg',
        '/Austin_Texas_L/o.jpg',
      ],

      owner: 'Samson George',
      title: 'Blissful Spark',
      price: '$812,000',
      location: 'Ohio',
      address: '24835 W Northwood Dr, Olmsted Falls, OH 44138',
      landMass: '2,336 sqft',
      details: '3 beds, 2 baths, Back garden',
      showAllimages: false,
    },

    {
      images: [
        '/Austin_Texas_M/a.jpg',
        '/Austin_Texas_M/b.jpg',
        '/Austin_Texas_M/c.jpg',
        '/Austin_Texas_M/d.jpg',
        '/Austin_Texas_M/e.jpg',
        '/Austin_Texas_M/f.jpg',
        '/Austin_Texas_M/g.jpg',
        '/Austin_Texas_M/h.jpg',
        '/Austin_Texas_M/i.jpg',
        '/Austin_Texas_M/j.jpg',
        '/Austin_Texas_M/k.jpg',
        '/Austin_Texas_M/l.jpg',
        '/Austin_Texas_M/m.jpg',
        '/Austin_Texas_M/n.jpg',
        '/Austin_Texas_M/o.jpg',
      ],

      owner: 'Smith Oink',
      title: 'Modern Condo',
      price: '$412,000',
      location: 'Dallas, TX',
      address: '3019 Golden Birch Dr, Dallas, TX 75253',
      landMass: '2,132 sqft',
      details: '3 beds, 2 baths, Open field',
      showAllimages: false,
    },
    {
      images: [
        '/Austin_Texas_N/a.jpg',
        '/Austin_Texas_N/b.jpg',
        '/Austin_Texas_N/c.jpg',
        '/Austin_Texas_N/d.jpg',
        '/Austin_Texas_N/e.jpg',
        '/Austin_Texas_N/f.jpg',
        '/Austin_Texas_N/g.jpg',
        '/Austin_Texas_N/h.jpg',
        '/Austin_Texas_N/i.jpg',
        '/Austin_Texas_N/j.jpg',
        '/Austin_Texas_N/k.jpg',
        '/Austin_Texas_N/l.jpg',
        '/Austin_Texas_N/m.jpg',
        '/Austin_Texas_N/n.jpg',
        '/Austin_Texas_N/o.jpg',
      ],

      owner: 'Kendrick Chen',
      title: 'Spacious Lava',
      price: '$582,000',
      location: 'Los Angeles, CA',
      address: '676 Shepard St APT 6, San Pedro, CA 90731',
      landMass: '1,986 sqft',
      details: '3 beds, 2 baths, Resting park',
      showAllimages: false,
    },

    {
      images: [
        '/Austin_Texas_O/a.jpg',
        '/Austin_Texas_O/b.jpg',
        '/Austin_Texas_O/c.jpg',
        '/Austin_Texas_O/d.jpg',
        '/Austin_Texas_O/e.jpg',
        '/Austin_Texas_O/f.jpg',
        '/Austin_Texas_O/g.jpg',
        '/Austin_Texas_O/h.jpg',
        '/Austin_Texas_O/i.jpg',
        '/Austin_Texas_O/j.jpg',
        '/Austin_Texas_O/k.jpg',
        '/Austin_Texas_O/l.jpg',
        '/Austin_Texas_O/m.jpg',
        '/Austin_Texas_O/n.jpg',
        '/Austin_Texas_O/o.jpg',
      ],

      owner: 'Kevin White',
      title: 'Glorious Park',
      price: '$1,812,000',
      location: 'Ohio',
      address: '7550 Brill Rd, Cincinnati, OH 45243',
      landMass: '4,883 sqft',
      details: '4 beds, 3 baths, swimming pool',
      showAllimages: false,
    },

    {
      images: [
        '/Austin_Texas_P/a.jpg',
        '/Austin_Texas_P/b.jpg',
        '/Austin_Texas_P/c.jpg',
        '/Austin_Texas_P/d.jpg',
        '/Austin_Texas_P/e.jpg',
        '/Austin_Texas_P/f.jpg',
        '/Austin_Texas_P/g.jpg',
        '/Austin_Texas_P/h.jpg',
        '/Austin_Texas_P/i.jpg',
        '/Austin_Texas_P/j.jpg',
        '/Austin_Texas_P/k.jpg',
        '/Austin_Texas_P/l.jpg',
        '/Austin_Texas_P/m.jpg',
        '/Austin_Texas_P/n.jpg',
        '/Austin_Texas_P/o.jpg',
      ],

      owner: 'Nicholas Taylor',
      title: 'Bliss Home',
      price: '$1,419,000',
      location: 'New York YK',
      address: '54 Kent St, Staten Island, NY 10306',
      landMass: '2,737 sqft',
      details: '3 beds, 2 baths, Open Field',
      showAllimages: false,
    },

    {
      images: [
        '/Austin_Texas_Q/a.jpg',
        '/Austin_Texas_Q/b.jpg',
        '/Austin_Texas_Q/c.jpg',
        '/Austin_Texas_Q/d.jpg',
        '/Austin_Texas_Q/e.jpg',
        '/Austin_Texas_Q/f.jpg',
        '/Austin_Texas_Q/g.jpg',
        '/Austin_Texas_Q/h.jpg',
        '/Austin_Texas_Q/i.jpg',
        '/Austin_Texas_Q/j.jpg',
        '/Austin_Texas_Q/k.jpg',
        '/Austin_Texas_Q/l.jpg',
        '/Austin_Texas_Q/m.jpg',
        '/Austin_Texas_Q/n.jpg',
        '/Austin_Texas_Q/o.jpg',
      ],

      owner: 'Christopher Martinez',
      title: 'Spring Boot',
      price: '$1,819,000',
      location: 'New York',
      address: '240 Alter Ave, Staten Island, NY 10305',
      landMass: '4,821 sqft',
      details: '4 beds, 3 baths, Open Field',
      showAllimages: false,
    },

    {
      images: [
        '/Austin_Texas_R/a.jpg',
        '/Austin_Texas_R/b.jpg',
        '/Austin_Texas_R/c.jpg',
        '/Austin_Texas_R/d.jpg',
        '/Austin_Texas_R/e.jpg',
        '/Austin_Texas_R/f.jpg',
        '/Austin_Texas_R/g.jpg',
        '/Austin_Texas_R/h.jpg',
        '/Austin_Texas_R/i.jpg',
        '/Austin_Texas_R/j.jpg',
        '/Austin_Texas_R/k.jpg',
        '/Austin_Texas_R/l.jpg',
        '/Austin_Texas_R/m.jpg',
        '/Austin_Texas_R/n.jpg',
        '/Austin_Texas_R/o.jpg',
      ],

      owner: 'Emily Davis',
      title: 'Spacious INN',
      price: '2,817,000',
      location: 'Charlotte, NC',
      address: '10205 Ventana Ct, Charlotte, NC 28277',
      landMass: '5,214 sqft',
      details: '4 beds, 4 baths, Open field',
      showAllimages: false,
    },

    {
      images: [
        '/Austin_Texas_S/a.jpg',
        '/Austin_Texas_S/b.jpg',
        '/Austin_Texas_S/c.jpg',
        '/Austin_Texas_S/d.jpg',
        '/Austin_Texas_S/e.jpg',
        '/Austin_Texas_S/f.jpg',
        '/Austin_Texas_S/g.jpg',
        '/Austin_Texas_S/h.jpg',
        '/Austin_Texas_S/i.jpg',
        '/Austin_Texas_S/j.jpg',
        '/Austin_Texas_S/k.jpg',
        '/Austin_Texas_S/l.jpg',
        '/Austin_Texas_S/m.jpg',
        '/Austin_Texas_S/n.jpg',
        '/Austin_Texas_S/o.jpg',
      ],

      owner: 'Saul Nicolas',
      title: 'Modern Have',
      price: '$610,000',
      location: 'Austin, TX',
      address: '11500 Sterlinghill Dr, Austin, TX 78758',
      landMass: '2,893 sqft',
      details: '3 beds, 3 baths, swimming pool',
      showAllimages: false,
    },

    {
      images: [
        '/Austin_Texas_T/a.jpg',
        '/Austin_Texas_T/b.jpg',
        '/Austin_Texas_T/c.jpg',
        '/Austin_Texas_T/d.jpg',
        '/Austin_Texas_T/e.jpg',
        '/Austin_Texas_T/f.jpg',
        '/Austin_Texas_T/g.jpg',
        '/Austin_Texas_T/h.jpg',
        '/Austin_Texas_T/i.jpg',
        '/Austin_Texas_T/j.jpg',
        '/Austin_Texas_T/k.jpg',
        '/Austin_Texas_T/l.jpg',
        '/Austin_Texas_T/m.jpg',
        '/Austin_Texas_T/n.jpg',
        '/Austin_Texas_T/o.jpg',
      ],

      owner: 'Samuel Hall',
      title: 'Entertainment Park',
      price: '$921,000',
      location: 'Ohio',
      address: '10720 Weatherstone Ct, Loveland, OH 45140',
      landMass: '3,212 sqft',
      details: '4 beds, 4 baths, Open field & Garden',
      showAllimages: false,
    },

    {
      images: [
        '/Austin_Texas_U/a.jpg',
        '/Austin_Texas_U/b.jpg',
        '/Austin_Texas_U/c.jpg',
        '/Austin_Texas_U/d.jpg',
        '/Austin_Texas_U/e.jpg',
        '/Austin_Texas_U/f.jpg',
        '/Austin_Texas_U/g.jpg',
        '/Austin_Texas_U/h.jpg',
        '/Austin_Texas_U/i.jpg',
        '/Austin_Texas_U/j.jpg',
        '/Austin_Texas_U/k.jpg',
        '/Austin_Texas_U/l.jpg',
        '/Austin_Texas_U/m.jpg',
        '/Austin_Texas_U/n.jpg',
        '/Austin_Texas_U/o.jpg',
      ],

      owner: 'Kes Smart',
      title: 'District Have',
      price: '$620,000',
      location: 'Ohio',
      address: '3259 Berwyn Pl, Cincinnati, OH 45209',
      landMass: '2,429, sqft',
      details: '3 beds, 3 baths, Back Field',
      showAllimages: false,
    },

    {
      images: [
        '/Austin_Texas_V/a.jpg',
        '/Austin_Texas_V/b.jpg',
        '/Austin_Texas_V/c.jpg',
        '/Austin_Texas_V/d.jpg',
        '/Austin_Texas_V/e.jpg',
        '/Austin_Texas_V/f.jpg',
        '/Austin_Texas_V/g.jpg',
        '/Austin_Texas_V/h.jpg',
        '/Austin_Texas_V/i.jpg',
        '/Austin_Texas_V/j.jpg',
        '/Austin_Texas_V/k.jpg',
        '/Austin_Texas_V/l.jpg',
        '/Austin_Texas_V/m.jpg',
        '/Austin_Texas_V/n.jpg',
        '/Austin_Texas_V/o.jpg',
      ],

      owner: 'Matthew Simpson',
      title: 'Villa Ice',
      price: '$712,000',
      location: 'Ohio',
      address: '3259 Berwyn Pl, Cincinnati, OH 45209',
      landMass: '3,865, sqft',
      details: '3 beds, 3 baths, swimming pool',
      showAllimages: false,
    },

    {
      images: [
        '/Austin_Texas_W/a.jpg',
        '/Austin_Texas_W/b.jpg',
        '/Austin_Texas_W/c.jpg',
        '/Austin_Texas_W/d.jpg',
        '/Austin_Texas_W/e.jpg',
        '/Austin_Texas_W/f.jpg',
        '/Austin_Texas_W/g.jpg',
        '/Austin_Texas_W/h.jpg',
        '/Austin_Texas_W/i.jpg',
        '/Austin_Texas_W/j.jpg',
        '/Austin_Texas_W/k.jpg',
        '/Austin_Texas_W/l.jpg',
        '/Austin_Texas_W/m.jpg',
        '/Austin_Texas_W/n.jpg',
        '/Austin_Texas_W/o.jpg',
      ],

      owner: 'Steve Neptune',
      title: 'Mill Spark',
      price: '$520,000',
      location: 'Ohio',
      address: '5938 Woodmont Ave, Cincinnati, OH 45213',
      landMass: '2,988, sqft',
      details: '3 beds, 2 baths, Open Field',
      showAllimages: false,
    },

    {
      images: [
        '/Austin_Texas_X/a.jpg',
        '/Austin_Texas_X/b.jpg',
        '/Austin_Texas_X/c.jpg',
        '/Austin_Texas_X/d.jpg',
        '/Austin_Texas_X/e.jpg',
        '/Austin_Texas_X/f.jpg',
        '/Austin_Texas_X/g.jpg',
        '/Austin_Texas_X/h.jpg',
        '/Austin_Texas_X/i.jpg',
        '/Austin_Texas_X/j.jpg',
        '/Austin_Texas_X/k.jpg',
        '/Austin_Texas_X/l.jpg',
        '/Austin_Texas_X/m.jpg',
        '/Austin_Texas_X/n.jpg',
        '/Austin_Texas_X/o.jpg',
      ],

      owner: 'Josh Marine',
      title: 'Eve Mill',
      price: '$950,000',
      location: 'Alaska',
      address: '',
      landMass: '3,755, sqft',
      details: '3 beds, 2 baths, Open field',
      showAllimages: false,
    },

    {
      images: [
        '/Austin_Texas_Y/a.jpg',
        '/Austin_Texas_Y/b.jpg',
        '/Austin_Texas_Y/c.jpg',
        '/Austin_Texas_Y/d.jpg',
        '/Austin_Texas_Y/e.jpg',
        '/Austin_Texas_Y/f.jpg',
        '/Austin_Texas_Y/g.jpg',
        '/Austin_Texas_Y/h.jpg',
        '/Austin_Texas_Y/i.jpg',
        '/Austin_Texas_Y/j.jpg',
        '/Austin_Texas_Y/k.jpg',
        '/Austin_Texas_Y/l.jpg',
        '/Austin_Texas_Y/m.jpg',
        '/Austin_Texas_Y/n.jpg',
        '/Austin_Texas_Y/o.jpg',
      ],

      owner: 'George Alvin',
      title: 'Main Strict',
      price: '$919,000',
      location: 'Ohio',
      address: '8204 Via Verde Dr, Austin, TX 78739',
      landMass: '3,265, sqft',
      details: '4 beds, 4 baths, swimming pool',
      showAllimages: false,
    },


    {
      images: [
        '/Austin_Texas_Z/a.jpg',
        '/Austin_Texas_Z/b.jpg',
        '/Austin_Texas_Z/c.jpg',
        '/Austin_Texas_Z/d.jpg',
        '/Austin_Texas_Z/e.jpg',
        '/Austin_Texas_Z/f.jpg',
        '/Austin_Texas_Z/g.jpg',
        '/Austin_Texas_Z/h.jpg',
        '/Austin_Texas_Z/i.jpg',
        '/Austin_Texas_Z/j.jpg',
        '/Austin_Texas_Z/k.jpg',
        '/Austin_Texas_Z/l.jpg',
        '/Austin_Texas_Z/m.jpg',
        '/Austin_Texas_Z/n.jpg',
        '/Austin_Texas_Z/o.jpg',
      ],

      owner: 'Bose Andre',
      title: 'Modern Haven',
      price: '$810,000',
      location: 'Ohio',
      address: '2719 Harris Blvd, Austin, TX 78703',
      landMass: '4,251, sqft',
      details: '4 beds, 5 baths, swimming pool',
      showAllimages: false,
    }
  ]

  // function to view more images
  trackHouse(index: number, house: any) {
    return house.title; // ensures stable tracking
  }

  toggleImages(house: any) {
    house.showAllimages = !house.showAllimages;
  }

  scrollLeft(event: Event) {
    const button = event.target as HTMLElement;
    const container = button.nextElementSibling as HTMLElement;
    if (container) {
      container.scrollBy({ left: -250, behavior: 'smooth' });
    }
  }

  scrollRight(event: Event) {
    const button = event.target as HTMLElement;
    const container = button.previousElementSibling as HTMLElement;
    if (container) {
      container.scrollBy({ left: 250, behavior: 'smooth' });
    }
  }

  //Search function for the houses
  allHouses: any[] = [
    this.houses,
  ]

  searchTerm: string = '';
  filterHouse: any[] = [];

  ngOnInt() {
    this.filterHouse = this.allHouses
  }

  searchHouse() {
    const term = this.searchTerm.toLocaleLowerCase().trim();
    if (!term) {
      this.filterHouse = this.allHouses;
      return;
    }

    if (!this.searchTerm.trim()) {
      this.filterHouse = this.allHouses
      return;
    }

    this.filterHouse = this.allHouses.filter(house =>
      house.title.toLocaleLowerCase().includes(term) ||
      house.price.toLocaleLowerCase().includes(term) ||
      house.details.toLocaleLowerCase.includes(term) ||
      (house.location && house.location.toLocaleLowerCase().includes(term))
    );
  }

  clearSearch() {
    this.searchTerm = '';
    this.filterHouse = this.allHouses;
  }

}
