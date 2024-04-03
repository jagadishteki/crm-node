import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  http = inject(HttpClient);
  constructor() { }

  getStudents() {
    return this.http.get('http://localhost:3000/api/students')
  }
}
