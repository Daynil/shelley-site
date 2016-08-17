import { Component, OnInit } from '@angular/core';

import { TransitionService } from '../shared/transition.service';

@Component({
  moduleId: module.id,
  selector: 'cassie',
  templateUrl: 'cassie.component.html',
  styleUrls: ['cassie.component.css']
})
export class CassieComponent implements OnInit {

  constructor(private transitionService: TransitionService) { }

  ngOnInit() {
    this.transitionService.transition();
  }

}