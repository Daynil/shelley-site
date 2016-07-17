import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'about-me',
  templateUrl: 'about-me.component.html',
  styleUrls: ['about-me.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class AboutMeComponent {

  constructor() { }

  ngOnInit() { }

}