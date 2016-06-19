import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { User } from './user.model';

import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

    constructor(private _http: Http) {

    }

    getUser():Observable<User[]> {
        return this._http.get('http://jsonplaceholder.typicode.com/users')
            .map((response: Response) => response.json())
    }
}