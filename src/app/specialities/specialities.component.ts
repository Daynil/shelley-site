import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { TransitionService } from '../shared/transition.service';

@Component({
  moduleId: module.id,
  selector: 'specialities',
  templateUrl: 'specialities.component.html',
  styleUrls: ['specialities.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class SpecialitiesComponent implements OnInit {

  constructor(private transitionService: TransitionService) { }

  ngOnInit() {
    this.transitionService.transition();
  }
}