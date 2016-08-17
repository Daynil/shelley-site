import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent }   from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { FormsComponent } from './forms/forms.component';
import { OtherServicesComponent } from './other-services/other-services.component';
import { ContactComponent } from './contact/contact.component';
import { CassieComponent } from './cassie/cassie.component';
import { BlogComponent } from './blog/blog.component';

/** Specialties Subtabs */
import { AnimalComponent } from './specialities/animal/animal.component';
import { ArtComponent } from './specialities/art/art.component';
import { GriefComponent } from './specialities/grief/grief.component';
import { MindfulnessComponent } from './specialities/mindfulness/mindfulness.component';
import { OtherIssuesComponent } from './specialities/other-issues/other-issues.component';
import { SandtrayComponent } from './specialities/sandtray/sandtray.component';
import { TraumaComponent } from './specialities/trauma/trauma.component';

import { TransitionService } from './shared/transition.service';

@NgModule({
  declarations: [ AppComponent, HomeComponent, AboutMeComponent, FormsComponent,
                  OtherServicesComponent, ContactComponent, AnimalComponent, ArtComponent,
                  GriefComponent, MindfulnessComponent, OtherIssuesComponent, SandtrayComponent,
                  TraumaComponent, CassieComponent, BlogComponent ],
  providers:    [ appRoutingProviders, TransitionService ],
  imports:      [ BrowserModule, routing ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }