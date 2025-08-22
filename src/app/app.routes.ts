import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Product } from './product/product';
import {Rental} from './rental/rental';
import {OtherService} from './other-service/other-service';
import {Advisor} from './advisor/advisor';
import {Valuation} from './valuation/valuation';
import {Search} from './search/search';
import {Services} from './services/services';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: 'home', component: Home},
  {path: 'about', component: About},
  {path: 'contact', component: Contact},
  {path: 'product', component: Product},
  {path: 'advisor', component: Advisor},
  {path: 'rental', component: Rental},
  {path: 'valuation', component: Valuation},
  {path: 'search', component: Search},
  {path: 'services', component: Services},
  {path: 'other-service', component: OtherService},
];
