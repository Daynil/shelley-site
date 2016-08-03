import { Component, OnInit } from '@angular/core';

import { TransitionService } from '../shared/transition.service';

@Component({
  moduleId: module.id,
  selector: 'other-services',
  templateUrl: 'other-services.component.html',
  styleUrls: ['other-services.component.css']
})
export class OtherServicesComponent implements OnInit {

  constructor(private transitionService: TransitionService) { }

  ngOnInit() {
    this.transitionService.transition();
  }

}