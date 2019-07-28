import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MymapService implements OnInit {
  lat: any;
  lng: any;
  mapCenter: any;
  basemapType: any;
  mapZoomLevel: any;
  constructor() { }
  ngOnInit(){
    
  }

}
