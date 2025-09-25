import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

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
  austinA: any[] = [
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
        imageI: '/Austin_Texas_A/i.jpg',
        imageJ: '/Austin_Texas_A/j.jpg',
        imageK: '/Austin_Texas_A/k.jpg',
        imageL: '/Austin_Texas_A/l.jpg',
        imageM: '/Austin_Texas_A/m.jpg',
        imageN: '/Austin_Texas_A/n.jpg',
        imageO: '/Austin_Texas_A/o.jpg',
      },

      owner: 'Serret Owen',
      title: 'Luxury Fashion',
      price: '$950,000',
      location: 'Austin, Texas',
      address: '5136 Big Fork Rd, Fort Worth, TX 76119',
      landMass: '3,976, sqft',
      details: '4 beds, 3 baths, Little Garden',
      showAllimages: false,
    }
  ]

  austinB: any[] = [
    {
      images: {
        imageA: '/Austin_Texas_B/a.jpg',
        imageB: '/Austin_Texas_B/b.jpg',
        imageC: '/Austin_Texas_B/c.jpg',
        imageD: '/Austin_Texas_B/d.jpg',
        imageE: '/Austin_Texas_B/e.jpg',
        imageF: '/Austin_Texas_B/f.jpg',
        imageG: '/Austin_Texas_B/g.jpg',
        imageH: '/Austin_Texas_B/h.jpg',
        imageI: '/Austin_Texas_B/i.jpg',
        imageJ: '/Austin_Texas_B/j.jpg',
        imageK: '/Austin_Texas_B/k.jpg',
        imageL: '/Austin_Texas_B/l.jpg',
        imageM: '/Austin_Texas_B/m.jpg',
        imageN: '/Austin_Texas_B/n.jpg',
        imageO: '/Austin_Texas_B/o.jpg',
      },

      owner: 'Marry Peterson',
      title: 'Modern Luxury',
      price: '$810,000',
      location: 'Austin, Texas',
      address: '13451 Bullick Hollow Rd, Austin, TX 78726',
      landMass: '2,255, sqft',
      details: '3 beds, 2 baths, Resting Park',
      showAllimages: false,
    }
  ]

  austinC: any[] = [
    {
      images: {
        imageA: '/Austin_Texas_C/a.jpg',
        imageB: '/Austin_Texas_C/b.jpg',
        imageC: '/Austin_Texas_C/c.jpg',
        imageD: '/Austin_Texas_C/d.jpg',
        imageE: '/Austin_Texas_C/e.jpg',
        imageF: '/Austin_Texas_C/f.jpg',
        imageG: '/Austin_Texas_C/g.jpg',
        imageH: '/Austin_Texas_C/h.jpg',
        imageI: '/Austin_Texas_C/i.jpg',
        imageJ: '/Austin_Texas_C/j.jpg',
        imageK: '/Austin_Texas_C/k.jpg',
        imageL: '/Austin_Texas_C/l.jpg',
        imageM: '/Austin_Texas_C/m.jpg',
        imageN: '/Austin_Texas_C/n.jpg',
        imageO: '/Austin_Texas_C/o.jpg',
      },

      owner: 'Fred Jackson',
      title: 'Modern Villa',
      price: '$715,000',
      location: 'Austin, AR',
      address: '50 Saddle Brook Cv, Austin, AR 72007',
      landMass: '3, 882 sgft',
      details: '4 beds, 4 baths, swimming pool',
      showAllimages: false,
    }
  ]

  austinD: any[] = [
    {
      images: {
        imageA: '/Austin_Texas_D/a.jpg',
        imageB: '/Austin_Texas_D/b.jpg',
        imageC: '/Austin_Texas_D/c.jpg',
        imageD: '/Austin_Texas_D/d.jpg',
        imageE: '/Austin_Texas_D/e.jpg',
        imageF: '/Austin_Texas_D/f.jpg',
        imageG: '/Austin_Texas_D/g.jpg',
        imageH: '/Austin_Texas_D/h.jpg',
        imageI: '/Austin_Texas_D/i.jpg',
        imageJ: '/Austin_Texas_D/j.jpg',
        imageK: '/Austin_Texas_D/k.jpg',
        imageL: '/Austin_Texas_D/l.jpg',
        imageM: '/Austin_Texas_D/m.jpg',
        imageN: '/Austin_Texas_D/n.jpg',
        imageO: '/Austin_Texas_D/o.jpg',
      },

      owner: 'Clark Timothy',
      title: 'Haven Condo',
      price: '$621,000',
      location: 'Los Angeles, CA',
      address: '2949 London St, Los Angeles, CA 90026',
      landMass: '2,589 sqft',
      details: '3 beds, 2 baths, Back garden',
      showAllimages: false,
    }
  ]

  austinE: any[] = [
    {
      images: {
        imageA: '/Austin_Texas_E/a.jpg',
        imageB: '/Austin_Texas_E/b.jpg',
        imageC: '/Austin_Texas_E/c.jpg',
        imageD: '/Austin_Texas_E/d.jpg',
        imageE: '/Austin_Texas_E/e.jpg',
        imageF: '/Austin_Texas_E/f.jpg',
        imageG: '/Austin_Texas_E/g.jpg',
        imageH: '/Austin_Texas_E/h.jpg',
        imageI: '/Austin_Texas_E/i.jpg',
        imageJ: '/Austin_Texas_E/j.jpg',
        imageK: '/Austin_Texas_E/k.jpg',
        imageL: '/Austin_Texas_E/l.jpg',
        imageM: '/Austin_Texas_E/m.jpg',
        imageN: '/Austin_Texas_E/n.jpg',
        imageO: '/Austin_Texas_E/o.jpg',
      },

      owner: 'Abigail James',
      title: 'Paradise villa',
      price: '$425,000',
      location: 'Los Angeles, CA',
      address: '676 Shepard St APT 6, San Pedro, CA 90731',
      landMass: '2,526 sqft',
      details: '3 beds, 2 baths, swimming pool',
      showAllimages: false,
    }
  ]

  austinF: any[] = [
    {
      images: {
        imageA: '/Austin_Texas_F/a.jpg',
        imageB: '/Austin_Texas_F/b.jpg',
        imageC: '/Austin_Texas_F/c.jpg',
        imageD: '/Austin_Texas_F/d.jpg',
        imageE: '/Austin_Texas_F/e.jpg',
        imageF: '/Austin_Texas_F/f.jpg',
        imageG: '/Austin_Texas_F/g.jpg',
        imageH: '/Austin_Texas_F/h.jpg',
        imageI: '/Austin_Texas_F/i.jpg',
        imageJ: '/Austin_Texas_F/j.jpg',
        imageK: '/Austin_Texas_F/k.jpg',
        imageL: '/Austin_Texas_F/l.jpg',
        imageM: '/Austin_Texas_F/m.jpg',
        imageN: '/Austin_Texas_F/n.jpg',
        imageO: '/Austin_Texas_F/o.jpg',
      },

      owner: 'Bright Steven',
      title: 'Spacious Haven',
      price: '$710,000',
      location: 'Los Angeles, CA',
      address: '13535 Bayliss Rd, Los Angeles, CA 90049',
      landMass: '4,852 sqft',
      details: '4 beds, 3 baths, swimming pool',
      showAllimages: false,
    }
  ]

  austinG: any[] = [
    {
      images: {
        imageA: '/Austin_Texas_G/a.jpg',
        imageB: '/Austin_Texas_G/b.jpg',
        imageC: '/Austin_Texas_G/c.jpg',
        imageD: '/Austin_Texas_G/d.jpg',
        imageE: '/Austin_Texas_G/e.jpg',
        imageF: '/Austin_Texas_G/f.jpg',
        imageG: '/Austin_Texas_G/g.jpg',
        imageH: '/Austin_Texas_G/h.jpg',
        imageI: '/Austin_Texas_G/i.jpg',
        imageJ: '/Austin_Texas_G/j.jpg',
        imageK: '/Austin_Texas_G/k.jpg',
        imageL: '/Austin_Texas_G/l.jpg',
        imageM: '/Austin_Texas_G/m.jpg',
        imageN: '/Austin_Texas_G/n.jpg',
        imageO: '/Austin_Texas_G/o.jpg',
      },

      owner: 'George Albert',
      title: 'Joint Park',
      price: '$690,000',
      location: 'Florida',
      address: '4952 Creekside Park Ave, Orlando, FL 32811',
      landMass: '3,525 sqft',
      details: '3 beds, 2 baths, swimming pool',
      showAllimages: false,
    }
  ]

  austinH: any[] = [
    {
      images: {
        imageA: '/Austin_Texas_H/a.jpg',
        imageB: '/Austin_Texas_H/b.jpg',
        imageC: '/Austin_Texas_H/c.jpg',
        imageD: '/Austin_Texas_H/d.jpg',
        imageE: '/Austin_Texas_H/e.jpg',
        imageF: '/Austin_Texas_H/f.jpg',
        imageG: '/Austin_Texas_H/g.jpg',
        imageH: '/Austin_Texas_H/h.jpg',
        imageI: '/Austin_Texas_H/i.jpg',
        imageJ: '/Austin_Texas_H/j.jpg',
        imageK: '/Austin_Texas_H/k.jpg',
        imageL: '/Austin_Texas_H/l.jpg',
        imageM: '/Austin_Texas_H/m.jpg',
        imageN: '/Austin_Texas_H/n.jpg',
        imageO: '/Austin_Texas_H/o.jpg',
      },

      owner: 'Bret Luw',
      title: 'Garden Sight',
      price: '$680,000',
      location: 'Oklahoma',
      address: '1040 Mabel C Fry Blvd, Yukon, OK 73099',
      landMass: '2,657 sqft',
      details: '3 beds, 3 baths, swimming pool',
      showAllimages: false,
    }
  ]

  austinI: any[] = [
    {
      images: {
        imageA: '/Austin_Texas_I/a.jpg',
        imageB: '/Austin_Texas_I/b.jpg',
        imageC: '/Austin_Texas_I/c.jpg',
        imageD: '/Austin_Texas_I/d.jpg',
        imageE: '/Austin_Texas_I/e.jpg',
        imageF: '/Austin_Texas_I/f.jpg',
        imageG: '/Austin_Texas_I/g.jpg',
        imageH: '/Austin_Texas_I/h.jpg',
        imageI: '/Austin_Texas_I/i.jpg',
        imageJ: '/Austin_Texas_I/j.jpg',
        imageK: '/Austin_Texas_I/k.jpg',
        imageL: '/Austin_Texas_I/l.jpg',
        imageM: '/Austin_Texas_I/m.jpg',
        imageN: '/Austin_Texas_I/n.jpg',
        imageO: '/Austin_Texas_I/o.jpg',
      },

      owner: 'Johnson Muller',
      title: 'Spark Light',
      price: '$912,000',
      location: 'Ohio, CC',
      address: '7550 Brill Rd, Cincinnati, OH 45243',
      landMass: '3,657 sqft',
      details: '3 beds, 3 baths, swimming pool',
      showAllimages: false,
    }
  ]

  austinJ: any[] = [
    {
      images: {
        imageA: '/Austin_Texas_J/a.jpg',
        imageB: '/Austin_Texas_J/b.jpg',
        imageC: '/Austin_Texas_J/c.jpg',
        imageD: '/Austin_Texas_J/d.jpg',
        imageE: '/Austin_Texas_J/e.jpg',
        imageF: '/Austin_Texas_J/f.jpg',
        imageG: '/Austin_Texas_J/g.jpg',
        imageH: '/Austin_Texas_J/h.jpg',
        imageI: '/Austin_Texas_J/i.jpg',
        imageJ: '/Austin_Texas_J/j.jpg',
        imageK: '/Austin_Texas_J/k.jpg',
        imageL: '/Austin_Texas_J/l.jpg',
        imageM: '/Austin_Texas_J/m.jpg',
        imageN: '/Austin_Texas_J/n.jpg',
        imageO: '/Austin_Texas_J/o.jpg',
      },

      owner: 'Esther Clark',
      title: 'Classic Vile',
      price: '$765,000',
      location: 'Ohio',
      address: '69 Cook Ln, Chillicothe, OH 45601',
      landMass: '4,232 sqft',
      details: '3 beds, 2 baths, Open Field',
      showAllimages: false,
    }
  ]

  austinK: any[] = [
    {
      images: {
        imageA: '/Austin_Texas_K/a.jpg',
        imageB: '/Austin_Texas_K/b.jpg',
        imageC: '/Austin_Texas_K/c.jpg',
        imageD: '/Austin_Texas_K/d.jpg',
        imageE: '/Austin_Texas_K/e.jpg',
        imageF: '/Austin_Texas_K/f.jpg',
        imageG: '/Austin_Texas_K/g.jpg',
        imageH: '/Austin_Texas_K/h.jpg',
        imageI: '/Austin_Texas_K/i.jpg',
        imageJ: '/Austin_Texas_K/j.jpg',
        imageK: '/Austin_Texas_K/k.jpg',
        imageL: '/Austin_Texas_K/l.jpg',
        imageM: '/Austin_Texas_K/m.jpg',
        imageN: '/Austin_Texas_K/n.jpg',
        imageO: '/Austin_Texas_K/o.jpg',
      },

      owner: 'Linda Murphy',
      title: 'City Hall',
      price: '$590,000',
      location: 'Ohio',
      address: '2295 Shenandoah Dr, Troy, OH 45373',
      landMass: '2,765 sqft',
      details: '3 beds, 2 baths, Back garden',
      showAllimages: false,
    }
  ]

  austinL: any[] = [
    {
      images: {
        imageA: '/Austin_Texas_L/a.jpg',
        imageB: '/Austin_Texas_L/b.jpg',
        imageC: '/Austin_Texas_L/c.jpg',
        imageD: '/Austin_Texas_L/d.jpg',
        imageE: '/Austin_Texas_L/e.jpg',
        imageF: '/Austin_Texas_L/f.jpg',
        imageG: '/Austin_Texas_L/g.jpg',
        imageH: '/Austin_Texas_L/h.jpg',
        imageI: '/Austin_Texas_L/i.jpg',
        imageJ: '/Austin_Texas_L/j.jpg',
        imageK: '/Austin_Texas_L/k.jpg',
        imageL: '/Austin_Texas_L/l.jpg',
        imageM: '/Austin_Texas_L/m.jpg',
        imageN: '/Austin_Texas_L/n.jpg',
        imageO: '/Austin_Texas_L/o.jpg',
      },

      owner: 'Samson George',
      title: 'Blissful Spark',
      price: '$812,000',
      location: 'Ohio',
      address: '24835 W Northwood Dr, Olmsted Falls, OH 44138',
      landMass: '2,336 sqft',
      details: '3 beds, 2 baths, Back garden',
      showAllimages: false,
    }
  ]

  austinM: any[] = [
    {
      images: {
        imageA: '/Austin_Texas_M/a.jpg',
        imageB: '/Austin_Texas_M/b.jpg',
        imageC: '/Austin_Texas_M/c.jpg',
        imageD: '/Austin_Texas_M/d.jpg',
        imageE: '/Austin_Texas_M/e.jpg',
        imageF: '/Austin_Texas_M/f.jpg',
        imageG: '/Austin_Texas_M/g.jpg',
        imageH: '/Austin_Texas_M/h.jpg',
        imageI: '/Austin_Texas_M/i.jpg',
        imageJ: '/Austin_Texas_M/j.jpg',
        imageK: '/Austin_Texas_M/k.jpg',
        imageL: '/Austin_Texas_M/l.jpg',
        imageM: '/Austin_Texas_M/m.jpg',
        imageN: '/Austin_Texas_M/n.jpg',
        imageO: '/Austin_Texas_M/o.jpg',
      },

      owner: 'Smith Oink',
      title: 'Modern Condo',
      price: '$412,000',
      location: 'Dallas, TX',
      address: '3019 Golden Birch Dr, Dallas, TX 75253',
      landMass: '2,132 sqft',
      details: '3 beds, 2 baths, Open field',
      showAllimages: false,
    }
  ]

  austinN: any[] = [
    {
      images: {
        imageA: '/Austin_Texas_N/a.jpg',
        imageB: '/Austin_Texas_N/b.jpg',
        imageC: '/Austin_Texas_N/c.jpg',
        imageD: '/Austin_Texas_N/d.jpg',
        imageE: '/Austin_Texas_N/e.jpg',
        imageF: '/Austin_Texas_N/f.jpg',
        imageG: '/Austin_Texas_N/g.jpg',
        imageH: '/Austin_Texas_N/h.jpg',
        imageI: '/Austin_Texas_N/i.jpg',
        imageJ: '/Austin_Texas_N/j.jpg',
        imageK: '/Austin_Texas_N/k.jpg',
        imageL: '/Austin_Texas_N/l.jpg',
        imageM: '/Austin_Texas_N/m.jpg',
        imageN: '/Austin_Texas_N/n.jpg',
        imageO: '/Austin_Texas_N/o.jpg',
      },

      owner: 'Kendrick Chen',
      title: 'Spacious Lava',
      price: '$582,000',
      location: 'Los Angeles, CA',
      address: '676 Shepard St APT 6, San Pedro, CA 90731',
      landMass: '1,986 sqft',
      details: '3 beds, 2 baths, Resting park',
      showAllimages: false,
    }
  ]

  austinO: any[] = [
    {
      images: {
        imageA: '/Austin_Texas_O/a.jpg',
        imageB: '/Austin_Texas_O/b.jpg',
        imageC: '/Austin_Texas_O/c.jpg',
        imageD: '/Austin_Texas_O/d.jpg',
        imageE: '/Austin_Texas_O/e.jpg',
        imageF: '/Austin_Texas_O/f.jpg',
        imageG: '/Austin_Texas_O/g.jpg',
        imageH: '/Austin_Texas_O/h.jpg',
        imageI: '/Austin_Texas_O/i.jpg',
        imageJ: '/Austin_Texas_O/j.jpg',
        imageK: '/Austin_Texas_O/k.jpg',
        imageL: '/Austin_Texas_O/l.jpg',
        imageM: '/Austin_Texas_O/m.jpg',
        imageN: '/Austin_Texas_O/n.jpg',
        imageO: '/Austin_Texas_O/o.jpg',
      },

      owner: 'Kevin White',
      title: 'Glorious Park',
      price: '$1,812,000',
      location: 'Ohio',
      address: '7550 Brill Rd, Cincinnati, OH 45243',
      landMass: '4,883 sqft',
      details: '4 beds, 3 baths, swimming pool',
      showAllimages: false,
    }
  ]

  austinP: any[] = [
    {
      images: {
        imageA: '/Austin_Texas_P/a.jpg',
        imageB: '/Austin_Texas_P/b.jpg',
        imageC: '/Austin_Texas_P/c.jpg',
        imageD: '/Austin_Texas_P/d.jpg',
        imageE: '/Austin_Texas_P/e.jpg',
        imageF: '/Austin_Texas_P/f.jpg',
        imageG: '/Austin_Texas_P/g.jpg',
        imageH: '/Austin_Texas_P/h.jpg',
        imageI: '/Austin_Texas_P/i.jpg',
        imageJ: '/Austin_Texas_P/j.jpg',
        imageK: '/Austin_Texas_P/k.jpg',
        imageL: '/Austin_Texas_P/l.jpg',
        imageM: '/Austin_Texas_P/m.jpg',
        imageN: '/Austin_Texas_P/n.jpg',
        imageO: '/Austin_Texas_P/o.jpg',
      },

      owner: 'Nicholas Taylor',
      title: 'Bliss Home',
      price: '$1,419,000',
      location: 'New York YK',
      address: '54 Kent St, Staten Island, NY 10306',
      landMass: '2,737 sqft',
      details: '3 beds, 2 baths, Open Field',
      showAllimages: false,
    }
  ]

  austinQ: any[] = [
    {
      images: {
        imageA: '/Austin_Texas_Q/a.jpg',
        imageB: '/Austin_Texas_Q/b.jpg',
        imageC: '/Austin_Texas_Q/c.jpg',
        imageD: '/Austin_Texas_Q/d.jpg',
        imageE: '/Austin_Texas_Q/e.jpg',
        imageF: '/Austin_Texas_Q/f.jpg',
        imageG: '/Austin_Texas_Q/g.jpg',
        imageH: '/Austin_Texas_Q/h.jpg',
        imageI: '/Austin_Texas_Q/i.jpg',
        imageJ: '/Austin_Texas_Q/j.jpg',
        imageK: '/Austin_Texas_Q/k.jpg',
        imageL: '/Austin_Texas_Q/l.jpg',
        imageM: '/Austin_Texas_Q/m.jpg',
        imageN: '/Austin_Texas_Q/n.jpg',
        imageO: '/Austin_Texas_Q/o.jpg',
      },

      owner: 'Christopher Martinez',
      title: 'Spring Boot',
      price: '$1,819,000',
      location: 'New York',
      address: '240 Alter Ave, Staten Island, NY 10305',
      landMass: '4,821 sqft',
      details: '4 beds, 3 baths, Open Field',
      showAllimages: false,
    }
  ]

  austinR: any[] = [
    {
      images: {
        imageA: '/Austin_Texas_R/a.jpg',
        imageB: '/Austin_Texas_R/b.jpg',
        imageC: '/Austin_Texas_R/c.jpg',
        imageD: '/Austin_Texas_R/d.jpg',
        imageE: '/Austin_Texas_R/e.jpg',
        imageF: '/Austin_Texas_R/f.jpg',
        imageG: '/Austin_Texas_R/g.jpg',
        imageH: '/Austin_Texas_R/h.jpg',
        imageI: '/Austin_Texas_R/i.jpg',
        imageJ: '/Austin_Texas_R/j.jpg',
        imageK: '/Austin_Texas_R/k.jpg',
        imageL: '/Austin_Texas_R/l.jpg',
        imageM: '/Austin_Texas_R/m.jpg',
        imageN: '/Austin_Texas_R/n.jpg',
        imageO: '/Austin_Texas_R/o.jpg',
      },

      owner: 'Emily Davis',
      title: 'Spacious INN',
      price: '2,817,000',
      location: 'Charlotte, NC',
      address: '10205 Ventana Ct, Charlotte, NC 28277',
      landMass: '5,214 sqft',
      details: '4 beds, 4 baths, Open field',
      showAllimages: false,
    }
  ]

  austinS: any[] = [
    {
      images: {
        imageA: '/Austin_Texas_S/a.jpg',
        imageB: '/Austin_Texas_S/b.jpg',
        imageC: '/Austin_Texas_S/c.jpg',
        imageD: '/Austin_Texas_S/d.jpg',
        imageE: '/Austin_Texas_S/e.jpg',
        imageF: '/Austin_Texas_S/f.jpg',
        imageG: '/Austin_Texas_S/g.jpg',
        imageH: '/Austin_Texas_S/h.jpg',
        imageI: '/Austin_Texas_S/i.jpg',
        imageJ: '/Austin_Texas_S/j.jpg',
        imageK: '/Austin_Texas_S/k.jpg',
        imageL: '/Austin_Texas_S/l.jpg',
        imageM: '/Austin_Texas_S/m.jpg',
        imageN: '/Austin_Texas_S/n.jpg',
        imageO: '/Austin_Texas_S/o.jpg',
      },

      owner: 'Saul Nicolas',
      title: 'Modern Have',
      price: '$610,000',
      location: 'Austin, TX',
      address: '11500 Sterlinghill Dr, Austin, TX 78758',
      landMass: '2,893 sqft',
      details: '3 beds, 3 baths, swimming pool',
      showAllimages: false,
    }
  ]

  austinT: any[] = [
    {
      images: {
        imageA: '/Austin_Texas_T/a.jpg',
        imageB: '/Austin_Texas_T/b.jpg',
        imageC: '/Austin_Texas_T/c.jpg',
        imageD: '/Austin_Texas_T/d.jpg',
        imageE: '/Austin_Texas_T/e.jpg',
        imageF: '/Austin_Texas_T/f.jpg',
        imageG: '/Austin_Texas_T/g.jpg',
        imageH: '/Austin_Texas_T/h.jpg',
        imageI: '/Austin_Texas_T/i.jpg',
        imageJ: '/Austin_Texas_T/j.jpg',
        imageK: '/Austin_Texas_T/k.jpg',
        imageL: '/Austin_Texas_T/l.jpg',
        imageM: '/Austin_Texas_T/m.jpg',
        imageN: '/Austin_Texas_T/n.jpg',
        imageO: '/Austin_Texas_T/o.jpg',
      },

      owner: 'Samuel Hall',
      title: 'Entertainment Park',
      price: '$921,000',
      location: 'Ohio',
      address: '10720 Weatherstone Ct, Loveland, OH 45140',
      landMass: '3,212 sqft',
      details: '4 beds, 4 baths, Open field & Garden',
      showAllimages: false,
    }
  ]

  austinU: any[] = [
    {
      images: {
        imageA: '/Austin_Texas_U/a.jpg',
        imageB: '/Austin_Texas_U/b.jpg',
        imageC: '/Austin_Texas_U/c.jpg',
        imageD: '/Austin_Texas_U/d.jpg',
        imageE: '/Austin_Texas_U/e.jpg',
        imageF: '/Austin_Texas_U/f.jpg',
        imageG: '/Austin_Texas_U/g.jpg',
        imageH: '/Austin_Texas_U/h.jpg',
        imageI: '/Austin_Texas_U/i.jpg',
        imageJ: '/Austin_Texas_U/j.jpg',
        imageK: '/Austin_Texas_U/k.jpg',
        imageL: '/Austin_Texas_U/l.jpg',
        imageM: '/Austin_Texas_U/m.jpg',
        imageN: '/Austin_Texas_U/n.jpg',
        imageO: '/Austin_Texas_U/o.jpg',
      },

      owner: 'Kes Smart',
      title: 'District Have',
      price: '$620,000',
      location: 'Ohio',
      address: '3259 Berwyn Pl, Cincinnati, OH 45209',
      landMass: '2,429, sqft',
      details: '3 beds, 3 baths, Back Field',
      showAllimages: false,
    }
  ]

  austinV: any[] = [
    {
      images: {
        imageA: '/Austin_Texas_V/a.jpg',
        imageB: '/Austin_Texas_V/b.jpg',
        imageC: '/Austin_Texas_V/c.jpg',
        imageD: '/Austin_Texas_V/d.jpg',
        imageE: '/Austin_Texas_V/e.jpg',
        imageF: '/Austin_Texas_V/f.jpg',
        imageG: '/Austin_Texas_V/g.jpg',
        imageH: '/Austin_Texas_V/h.jpg',
        imageI: '/Austin_Texas_V/i.jpg',
        imageJ: '/Austin_Texas_V/j.jpg',
        imageK: '/Austin_Texas_V/k.jpg',
        imageL: '/Austin_Texas_V/l.jpg',
        imageM: '/Austin_Texas_V/m.jpg',
        imageN: '/Austin_Texas_V/n.jpg',
        imageO: '/Austin_Texas_V/o.jpg',
      },

      owner: 'Matthew Simpson',
      title: 'Villa Ice',
      price: '$712,000',
      location: 'Ohio',
      address: '3259 Berwyn Pl, Cincinnati, OH 45209',
      landMass: '3,865, sqft',
      details: '3 beds, 3 baths, swimming pool',
      showAllimages: false,
    }
  ]

  austinW: any[] = [
    {
      images: {
        imageA: '/Austin_Texas_W/a.jpg',
        imageB: '/Austin_Texas_W/b.jpg',
        imageC: '/Austin_Texas_W/c.jpg',
        imageD: '/Austin_Texas_W/d.jpg',
        imageE: '/Austin_Texas_W/e.jpg',
        imageF: '/Austin_Texas_W/f.jpg',
        imageG: '/Austin_Texas_W/g.jpg',
        imageH: '/Austin_Texas_W/h.jpg',
        imageI: '/Austin_Texas_W/i.jpg',
        imageJ: '/Austin_Texas_W/j.jpg',
        imageK: '/Austin_Texas_W/k.jpg',
        imageL: '/Austin_Texas_W/l.jpg',
        imageM: '/Austin_Texas_W/m.jpg',
        imageN: '/Austin_Texas_W/n.jpg',
        imageO: '/Austin_Texas_W/o.jpg',
      },

      owner: 'Steve Neptune',
      title: 'Mill Spark',
      price: '$520,000',
      location: 'Ohio',
      address: '5938 Woodmont Ave, Cincinnati, OH 45213',
      landMass: '2,988, sqft',
      details: '3 beds, 2 baths, Open Field',
      showAllimages: false,
    }
  ]

  austinX: any[] = [
    {
      images: {
        imageA: '/Austin_Texas_X/a.jpg',
        imageB: '/Austin_Texas_X/b.jpg',
        imageC: '/Austin_Texas_X/c.jpg',
        imageD: '/Austin_Texas_X/d.jpg',
        imageE: '/Austin_Texas_X/e.jpg',
        imageF: '/Austin_Texas_X/f.jpg',
        imageG: '/Austin_Texas_X/g.jpg',
        imageH: '/Austin_Texas_X/h.jpg',
        imageI: '/Austin_Texas_X/i.jpg',
        imageJ: '/Austin_Texas_X/j.jpg',
        imageK: '/Austin_Texas_X/k.jpg',
        imageL: '/Austin_Texas_X/l.jpg',
        imageM: '/Austin_Texas_X/m.jpg',
        imageN: '/Austin_Texas_X/n.jpg',
        imageO: '/Austin_Texas_X/o.jpg',
      },

      owner: 'Josh Marine',
      title: 'Eve Mill',
      price: '$950,000',
      location: 'Alaska',
      address: '',
      landMass: '3,755, sqft',
      details: '3 beds, 2 baths, Open field',
      showAllimages: false,
    }
  ]

  austinY: any[] = [
    {
      images: {
        imageA: '/Austin_Texas_Y/a.jpg',
        imageB: '/Austin_Texas_Y/b.jpg',
        imageC: '/Austin_Texas_Y/c.jpg',
        imageD: '/Austin_Texas_Y/d.jpg',
        imageE: '/Austin_Texas_Y/e.jpg',
        imageF: '/Austin_Texas_Y/f.jpg',
        imageG: '/Austin_Texas_Y/g.jpg',
        imageH: '/Austin_Texas_Y/h.jpg',
        imageI: '/Austin_Texas_Y/i.jpg',
        imageJ: '/Austin_Texas_Y/j.jpg',
        imageK: '/Austin_Texas_Y/k.jpg',
        imageL: '/Austin_Texas_Y/l.jpg',
        imageM: '/Austin_Texas_Y/m.jpg',
        imageN: '/Austin_Texas_Y/n.jpg',
        imageO: '/Austin_Texas_Y/o.jpg',
      },

      owner: 'George Alvin',
      title: 'Main Strict',
      price: '$919,000',
      location: 'Ohio',
      address: '8204 Via Verde Dr, Austin, TX 78739',
      landMass: '3,265, sqft',
      details: '4 beds, 4 baths, swimming pool',
      showAllimages: false,
    }
  ]

  austinZ: any[] = [
    {
      images: {
        imageA: '/Austin_Texas_Z/a.jpg',
        imageB: '/Austin_Texas_Z/b.jpg',
        imageC: '/Austin_Texas_Z/c.jpg',
        imageD: '/Austin_Texas_Z/d.jpg',
        imageE: '/Austin_Texas_Z/e.jpg',
        imageF: '/Austin_Texas_Z/f.jpg',
        imageG: '/Austin_Texas_Z/g.jpg',
        imageH: '/Austin_Texas_Z/h.jpg',
        imageI: '/Austin_Texas_Z/i.jpg',
        imageJ: '/Austin_Texas_Z/j.jpg',
        imageK: '/Austin_Texas_Z/k.jpg',
        imageL: '/Austin_Texas_Z/l.jpg',
        imageM: '/Austin_Texas_Z/m.jpg',
        imageN: '/Austin_Texas_Z/n.jpg',
        imageO: '/Austin_Texas_Z/o.jpg',
      },

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
  toggleImages(house: any) {
    house.showAllimages = !house.showAllimages;
  }
}
