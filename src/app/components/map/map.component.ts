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
   if(this.isGeoLocationAvailable()){
    navigator.geolocation.getCurrentPosition((possition)=>{
      this.initMap(possition);
    });
   }else{
     this.initMap();
   }
  }
  //Greece Geolocation
  // 39.0075314,22.1871173,7.5
  initMap(possition?){
    this.map = L.map('map',{
      center:[
        possition?possition.coords.latitude:39.0075314,
        possition?possition.coords.longitude:22.1871173],
      zoom:possition?17:7.5
    });
 
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
     maxZoom: 19,
     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
   });
 
   tiles.addTo(this.map);
  }

  private isGeoLocationAvailable():boolean{
    return navigator.geolocation?true:false;
  }
}
