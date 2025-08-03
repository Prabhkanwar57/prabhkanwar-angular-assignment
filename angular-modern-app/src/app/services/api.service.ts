// src/app/services/api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    // Public API to fetch players from FC Barcelona
    return this.http.get('https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?t=Barcelona');
  }
}
