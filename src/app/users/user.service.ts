import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from "./user.class";
import { JsonResp } from '../json-resp.class';

const url = 'http://localhost:5000/users/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  list(): Observable<JsonResp>{
    return this.http.get(url + 'list') as Observable<JsonResp>;
  }

  constructor(private http: HttpClient) { }
}
