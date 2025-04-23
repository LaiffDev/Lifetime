import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class RoutineService {
  constructor(private http: HttpClient) {}

  GetRoutines() {
    return this.http.get(`${environment.baseUrl}/routines`);
  }
}
