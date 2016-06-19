import { Component, OnInit } from '@angular/core';

import { UserService } from './shared/user-list/user.service';
import { User } from './shared/user-list/user.model';

@Component({
  moduleId: module.id,
  selector: 'angular2-http-service-app',
  templateUrl: 'angular2-http-service.component.html',
  styleUrls: ['angular2-http-service.component.css'],
  providers: [UserService]
})
export class Angular2HttpServiceAppComponent implements OnInit{
  
  users: Array<User>;

  constructor(private _service: UserService){}

  ngOnInit() {
    this.getUsersFromUserService();
  }

  getUsersFromUserService():void {
    this._service.getUser().subscribe(
      data => {
        this.users = data;
      }
      ,
      error => {
        console.error(error);
      }
      ,
      () => {
        console.log('Done');
      }
    )
  }
}
