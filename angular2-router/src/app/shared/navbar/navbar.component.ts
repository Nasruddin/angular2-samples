import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'app-nav',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.css'],
    directives: [ROUTER_DIRECTIVES]
})

export class NavbarComponent {

}