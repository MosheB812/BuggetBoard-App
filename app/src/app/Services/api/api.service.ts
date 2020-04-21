import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Bug, Group } from "../../Models/models.model";

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  apiUrl = 'https://v5rgkekyhj.execute-api.us-east-1.amazonaws.com/Production/buggetboard';

  // Constructor
  constructor(private _httpClient: HttpClient) { }

  // Api GET request - Bug List
  getBugList() {
    return this._httpClient.get<any[]>(this.apiUrl + '/bug');
  }
  // Api GET request - Group List
  getGroupList() {
    // Need to implement a way to only get groups for particular uid
    // For now this only provides ALL groups for testing front end
    return this._httpClient.get<any[]>(this.apiUrl + '/group');
  }
  // Api POST request - New Bug
  postBug(bug: Bug) {
    return this._httpClient.post(this.apiUrl + '/bug', bug);
  }
}
