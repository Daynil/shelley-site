import { provideRouter, RouterConfig } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { FormsComponent } from './forms/forms.component';
import { OtherServicesComponent } from './other-services/other-services.component';
import { SpecialitiesComponent } from './specialities/specialities.component';
import { ContactComponent } from './contact/contact.component';


export const routes: RouterConfig = [
  { path: '',               component: HomeComponent },
  { path: 'about-me',       component: AboutMeComponent },
  { path: 'forms',          component: FormsComponent },
  { path: 'other-services', component: OtherServicesComponent },
  { path: 'specialities',   component: SpecialitiesComponent },
  { path: 'contact',        component: ContactComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];