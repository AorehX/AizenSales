import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  // About us
  headerH1: string = 'Contact Us - Aizen Homes'
  headerH3: string = 'Find Your Dream Home Today'
  aboutParagraph: string = "We are here to help you buy, or rent your perfect property. Reach out to our friendly with any of the question or\n" +
    "      to schedule a consultation."

}
