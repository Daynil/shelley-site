import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { TransitionService } from '../shared/transition.service';

@Component({
  moduleId: module.id,
  selector: 'about-me',
  templateUrl: 'about-me.component.html',
  styleUrls: ['about-me.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class AboutMeComponent implements OnInit {

  constructor(private transitionService: TransitionService) { }

  ngOnInit() {
    this.transitionService.transition();
  }

}