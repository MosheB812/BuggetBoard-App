import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Bug } from "../../Models/bug.model";

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  apiUrl = 'https://my-json-server.typicode.com/MoB812/MyJSONServer/bugs';

  // Constructor
  constructor(private _httpClient: HttpClient) { }

  // Api GET request - Bug List
  getBugLists() {
    return this._httpClient.get<any[]>(this.apiUrl);
  }
  // Api POST request - New Bug
  postBug(bug: Bug) {
    return this._httpClient.post(this.apiUrl, bug);
  }
}
