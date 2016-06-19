import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';

import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './+home/home.component';
import { AboutComponent } from './+about/about.component';

@Component({
  moduleId: module.id,
  selector: 'angular2-router-app',
  templateUrl: 'angular2-router.component.html',
  styleUrls: ['angular2-router.component.css'],
  directives: [NavbarComponent, ROUTER_DIRECTIVES]
})

@Routes([
  {path: '/', component: HomeComponent},
  {path: '/about', component: AboutComponent}
])

export class Angular2RouterAppComponent {
  title = 'angular2-router works!';
}
