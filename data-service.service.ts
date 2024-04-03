import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  http = inject(HttpClient);
  constructor() { }

  getStudents() {
    return this.http.get('https://crm-node-da4h.onrender.com/api/students')
  }
}
