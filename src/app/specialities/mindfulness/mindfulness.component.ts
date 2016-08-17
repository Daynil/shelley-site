import { Component, OnInit } from '@angular/core';

import { TransitionService } from '../../shared/transition.service';

@Component({
  moduleId: module.id,
  selector: 'mindfulness',
  templateUrl: 'mindfulness.component.html',
  styleUrls: ['mindfulness.component.css']
})
export class MindfulnessComponent implements OnInit {

  constructor(private transitionService: TransitionService) { }

  ngOnInit() {
    this.transitionService.transition();
  }

}