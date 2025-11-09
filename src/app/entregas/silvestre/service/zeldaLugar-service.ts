import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ZeldaLugar } from '../model/zeldaLugarInterface';

@Injectable({
  providedIn: 'root'
})
export class ZeldaLugaresService {
  private apiUrl = 'https://zelda.fanapis.com/api/places';

  constructor(private http: HttpClient) {}

  getLugares(): Observable<{ success: boolean; count: number; data: ZeldaLugar[] }> {
    return this.http.get<{ success: boolean; count: number; data: ZeldaLugar[] }>(this.apiUrl);
  }
}
