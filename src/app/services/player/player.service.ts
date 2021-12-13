import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
    constructor(private http: HttpClient) {}

    // Set up basic Service functions to grab data from given JSON files. This, of course, would be pointing to API endpoints that query the database.
    getPlayer() {
      return this.http.get('assets/json/player.json');
    }
    
    getSeason() {
        return this.http.get<any>('assets/json/season.json');
    }
}
