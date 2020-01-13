import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { WeatherService } from 'src/app/services/weather.service';
import { CurrentWeather } from 'src/app/models/weather.model';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  map: L.Map;
  currentWeather: CurrentWeather;
  weatherData: CurrentWeather[] = [];

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    if (this.isGeoLocationAvailable()) {
      navigator.geolocation.getCurrentPosition((possition) => {
        this.initMap(possition);
        this.weatherService.getCurrentWeatherByCoords(possition.coords.latitude, possition.coords.longitude).subscribe((weather: CurrentWeather) => {
          weather.iconUrl = this.weatherService.getIconUrl(weather.weather[0].icon);
          this.currentWeather = weather;
          console.log(weather);
        });

        this.weatherService.getCities().subscribe((cities: any[]) => {
          console.log(cities)
        })
      });
    } else {
      this.initMap();
    }

  }
  //Greece Geolocation
  // 39.0075314,22.1871173,7.5
  initMap(possition?) {
    this.map = L.map('map', {
      zoomControl: false,
      center: [
        possition ? possition.coords.latitude : 39.0075314,
        possition ? possition.coords.longitude : 22.1871173],
      zoom: possition ? 18 : 7.5,
      layers: [
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        })
      ]
    });

    L.control.zoom({
      position: 'bottomright'
    }).addTo(this.map);


    this.addMarker(this.map, possition);

    // L.marker([possition.coords.latitude, possition.coords.longitude]).addTo(this.map);
  }

  private async addMarker(map: L.Map, possition: any, label?: string) {
    const marker = L.marker(
      [possition.coords.latitude, possition.coords.longitude],
      {
        icon: L.icon({ iconUrl: 'assets/icons/pin.png', iconSize: [37, 50], iconAnchor: [17, 50], popupAnchor: [0, -50] })
      }
    ).addTo(map);
    if (label) {
      marker.bindPopup(label);
    }
  }

  private isGeoLocationAvailable(): boolean {
    return navigator.geolocation ? true : false;
  }
}
