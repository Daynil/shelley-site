import { Component, OnInit } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { TransitionService } from './shared/transition.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [HTTP_PROVIDERS, TransitionService]
})
export class AppComponent implements OnInit {

  copydate: string;

  constructor() { }

  ngOnInit() {
    this.copydate = new Date().getFullYear() + '';
  }

  getActiveTab() {
    
  }

}