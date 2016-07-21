import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { TransitionService } from '../shared/transition.service';

@Component({
  moduleId: module.id,
  selector: 'portfolio',
  templateUrl: 'portfolio.component.html',
  styleUrls: ['portfolio.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class PortfolioComponent implements OnInit {

  constructor(private transitionService: TransitionService) { }

  ngOnInit() {
    this.transitionService.transition();
  }
}