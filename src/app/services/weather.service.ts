import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as cityNames from '../../assets/data/cities.greece.json';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getCurrentWeatherByCityName(name: string) {
  }

  getCities(): Observable<any> {
    return this.http.get('../../assets/data/cities.greece.json');
  }
}
