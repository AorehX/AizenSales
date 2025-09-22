import { Routes } from '@angular/router';
import { Home } from './home/home';
import { PageNotfound } from './page-notfound/page-notfound';
import { Contact } from './contact/contact';
import { AboutComponent } from './about/about';
import { Services } from './services/services';
import { Pages } from './pages/pages';
import { User } from './user/user';
import { Page1 } from './pages/page1/page1';
import { Page2 } from './pages/page2/page2';
import { Page3 } from './pages/page3/page3';
import { Page4 } from './pages/page4/page4';
import { Page5 } from './pages/page5/page5';



export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    
    { path: 'home', component: Home },

    { path: 'contact', component: Contact },

    { path: 'about', component: AboutComponent },

    { path: 'services', component: Services},

    {path: 'pages', component: Pages,
        children: [
            {path: 'page1', component: Page1},
            { path: 'page1', component: Page2 },
            { path: 'page1', component: Page3 },
            { path: 'page1', component: Page4 },
            { path: 'page1', component: Page5 },
        ]
    },

    {path: 'rental', component: User},

    { path: '**', component: PageNotfound},
];
