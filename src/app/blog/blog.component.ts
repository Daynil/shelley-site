import { Component, OnInit } from '@angular/core';

import { TransitionService } from '../shared/transition.service';

@Component({
  moduleId: module.id,
  selector: 'blog',
  template: `
    <div [class.page-transition]="transitionService.isTransitioning()">
      <h3 class="text-center">Blog coming soon...</h3>
    </div>
  `,
  styleUrls: ['blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private transitionService: TransitionService) { }

  ngOnInit() {
    this.transitionService.transition();
  }

}