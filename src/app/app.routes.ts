import { provideRouter, RouterConfig } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';


export const routes: RouterConfig = [
  { path: '',          component: HomeComponent },
  { path: 'about-me',  component: AboutMeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'contact',   component: ContactComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];