import { Component, OnInit } from '@angular/core';

import { TransitionService } from '../../shared/transition.service';

@Component({
  moduleId: module.id,
  selector: 'sandtray',
  templateUrl: 'sandtray.component.html',
  styleUrls: ['sandtray.component.css']
})
export class SandtrayComponent implements OnInit {

  constructor(private transitionService: TransitionService) { }

  ngOnInit() {
    this.transitionService.transition();
  }

}