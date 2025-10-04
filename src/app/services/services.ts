import {Component} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-services',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './services.html',
  styleUrl: './services.scss'
})
export class Services {
  // header section
  headerH1: string = 'Aizen Professional Services'
  headerH3: string = 'Find Your Home Agent Today'
  aboutParagraph: string = "We are here to help you buy, or rent your perfect property. Reach out to our friendly with any of the question or to schedule a consultation."

  // Cards section for the team members
  trackAgents(index: number, agent: any) {
    return agent.title; // ensures stable tracking
  }

  // Agents info
  agents: any [] = [
    {
      agent: ['/EstateWorkers/ManA.jpg'],
      name: 'Joe Kennedy',
      info: 'I’m dedicated to matching clients with homes that perfectly fit their lifestyle. With strong communication skills and deep market insight, I make the buying and selling process smooth and rewarding.',
      mail: 'joe@gmail.com',
    },

    {
      agent: ['/EstateWorkers/WomanA.jpg'],
      name: 'Rita Oprah',
      info: 'Every client deserves a trusted guide when making big real estate decisions. I combine honesty, patience, and industry knowledge to help you move forward with confidence.',
      mail: 'rita-estates@outlook.com',
    },

    {
      agent: ['/EstateWorkers/WomanB.jpg'],
      name: 'Katherine',
      info: 'Whether buying your first home or investing in property, I bring a results-driven approach and personal attention to every detail — ensuring success from the first showing to closing day.',
      mail: 'kath-service@gmail.com',
    },

    {
      agent: ['/EstateWorkers/WomanI.jpg'],
      name: 'Amanda Wilson',
      info: 'Passionate about helping families find their dream homes, I bring a personal touch and years of local knowledge to every transaction.',
      mail: 'amandawlison@gmail.com',
    },

    {
      agent: ['/EstateWorkers/ManB.jpg'],
      name: 'John Martinez',
      info: 'Specializing in residential and commercial properties, I provide clients with expert advice, market insights, and strong negotiation skills.',
      mail: 'johnmartinez@gmail.com',
    },

    {
      agent: ['/EstateWorkers/WomanD.jpg'],
      name: 'Linda Miller',
      info: 'With a background in customer service and real estate, I pride myself on delivering smooth and stress-free buying and selling experiences.',
      mail: 'lindamiller@gmail.com',
    },

    {
      agent: ['/EstateWorkers/WomanF.jpg'],
      name: 'Rebecca Anderson',
      info: 'Honesty, transparency, and client satisfaction are at the heart of my real estate practice.',
      mail: 'rebbeccaand@outlook.com',
    },

    {
      agent: ['/EstateWorkers/WomanG.jpg'],
      name: 'Mary Miller',
      info: 'I combine modern marketing tools with traditional values to ensure your property gets maximum exposure and the best deal.',
      mail: 'mmmarymiller@outlook.com',
    },

    {
      agent: ['EstateWorkers/ManC.jpg'],
      name: 'Lauren Thompson',
      info: 'As a lifelong resident of this area, I understand the neighborhoods, schools, and lifestyle options that matter most to clients.',
      mail: 'charlesdavis@gmail.com',
    },

    {
      agent: ['/EstateWorkers/WomanH.jpg'],
      name: 'Sarah Martinez',
      info: 'From first-time buyers to seasoned investors, I tailor my services to meet your unique goals.',
      mail: 'sarahmartinez@gmail.com',
    },

    {
      agent: ['/EstateWorkers/WomanJ.jpg'],
      name: 'Jennifer Martinez',
      info: 'Strong negotiation skills, attention to detail, and a client-first mindset make me a trusted advisor in the property market.',
      mail: 'jennifermart@gmail.com',
    },

    {
      agent: ['/EstateWorkers/ManE.jpg'],
      name: 'David Davis',
      info: 'Real estate is more than transactions — it’s about building lasting relationships and creating homes full of memories.',
      mail: 'davisdavid@outlook.com',
    },

    {
      agent: ['/EstateWorkers/WomanL.jpg'],
      name: 'Patricia Miller',
      info: 'With a strong background in market analysis, I help clients make informed and confident real estate decisions.',
      mail: 'patmiller9789@gmail.com',
    },

    {
      agent: ['/EstateWorkers/ManF.jpg'],
      name: 'Robert Smith',
      info: 'I stay ahead of the market by using data-driven insights and innovative marketing strategies.',
      mail: 'robertsmith@outlook.com',
    },

    {
      agent: ['/EstateWorkers/ManG.jpg'],
      name: 'Thomas Smith',
      info: 'Helping clients navigate every step — from financing to closing — is what I do best.',
      mail: 'thomassm506@gmail.com',
    },

    {
      agent: ['/EstateWorkers/WomanJ.jpg'],
      name: 'Susan Jones',
      info: 'My mission is simple: to make buying or selling your property as seamless as possible.',
      mail: 'susanjones0324@outlook.com',
    },

    {
      agent: ['/EstateWorkers/WomanK.jpg'],
      name: 'Brittany Walker',
      info: 'Dedicated to professionalism and integrity, I work tirelessly to achieve the results my clients deserve.',
      mail: 'brittanywalker@outlook.com',
    },

    {
      agent: ['/EstateWorkers/ManH.jpg'],
      name: 'Thomas Garcia',
      info: 'Specializing in luxury homes, I bring discretion, market expertise, and an eye for detail to every client.',
      mail: 'thomasgarcia@outlook.com',
    },

    {
      agent: ['/EstateWorkers/ManJ.jpg'],
      name: 'Heather Taylor',
      info: 'Whether you’re relocating, downsizing, or investing, I provide personalized solutions tailored to your needs.',
      mail: 'taylorheat@gmail.com',
    },

    {
      agent: ['/EstateWorkers/WomanL.jpg'],
      name: 'David Lopez',
      info: 'My commitment is to provide exceptional service, whether you’re buying your first home or expanding your investment portfolio.',
      mail: 'lopezd@outlook.com',
    },

    // {
    //   agent: [''],
    //   name: 'Charles Davis',
    //   info: 'I believe every property has a story — and I’m here to help you tell it in the best way possible.',
    //   mail: 'charle20dav@gmail.com',
    // },
    //
    // {
    //   agent: [''],
    //   name: 'Patricia Jones',
    //   info: 'Clients choose me for my responsive communication, local expertise, and commitment to exceeding expectations.',
    //   mail: 'patriciajones@gmail.com',
    // },
    //
    // {
    //   agent: [''],
    //   name: 'William Davis',
    //   info: 'I guide clients through one of life’s biggest decisions with patience, care, and professionalism.',
    //   mail: 'willdav@outlook.com',
    // },
    //
    // {
    //   agent: [''],
    //   name: 'Charles Smith',
    //   info: 'From staging advice to closing paperwork, I manage the details so you can focus on what matters most.',
    //   mail: 'charsmith@outlook.com',
    // },
    //
    // {
    //   agent: [''],
    //   name: 'Sarah Miller',
    //   info: 'I treat every client’s property as if it were my own — with dedication, care, and a commitment to the best outcome.',
    //   mail: 'sarahmiller20@gmail.com',
    // },
    //
    // {
    //   agent: [''],
    //   name: 'William Smith',
    //   info: 'I thrive on connecting people with properties that truly fit their lifestyle and long-term goals.',
    //   mail: 'smithwill123@gmail.com',
    // },
  ]

}
