import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  map:L.Map;
  constructor() { }

  ngOnInit(): void {
   

  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition((possition)=>{
      console.log(possition)

      this.initMap(possition);
    })
  }
  }

  initMap(possition){
    this.map = L.map('map',{
      center:[possition.coords.latitude,possition.coords.longitude],
      zoom:17
    });
 
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
     maxZoom: 19,
     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
   });
 
   tiles.addTo(this.map);
  }
}
