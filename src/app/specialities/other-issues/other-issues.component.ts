import { Component, OnInit } from '@angular/core';

import { TransitionService } from '../../shared/transition.service';

@Component({
  moduleId: module.id,
  selector: 'other-issues',
  templateUrl: 'other-issues.component.html',
  styleUrls: ['other-issues.component.css']
})
export class OtherIssuesComponent implements OnInit {

  constructor(private transitionService: TransitionService) { }

  ngOnInit() {
    this.transitionService.transition();
  }
  
}