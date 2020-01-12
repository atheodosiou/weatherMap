import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as cityNames from '../../assets/data/cities.greece.json';
import { CurrentWeather } from '../models/weather.model.js';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }
  private apiKey = '52259bbf96f161eca25b0162290f1c24';

  getCurrentWeatherByCoords(lat: number, lon: number): Observable<any> {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&APPID=${this.apiKey}&lang=el`);
  }

  getCities(): Observable<any> {
    return this.http.get('../../assets/data/cities.greece.json');
  }

  getIconUrl(icon: string): string {
    return `http://openweathermap.org/img/wn/${icon}@2x.png`;
  }
}
