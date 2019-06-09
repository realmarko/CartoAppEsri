import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'appre';
  lat: any;
  lng: any;
  mapCenter: any;
  basemapType: any;
  mapZoomLevel: any;

  constructor() {

  }

  ngOnInit() {
    this.loadWithPoint();
  }
  async loadWithPoint() {


    if (navigator) {
      navigator.geolocation.getCurrentPosition(pos => {
        this.lng = +pos.coords.longitude;
        this.lat = +pos.coords.latitude;

        // Set our map properties
        // this.mapCenter = [-122.4194, 37.7749];
        this.mapCenter = [this.lng, this.lat];
        this.basemapType = 'streets';
        this.mapZoomLevel = 18;

      });

    }
  }


  // See app.component.html
  mapLoadedEvent(status: boolean) {
    console.log('The map loaded: ' + status);
  }
  onFeatureSelected(feature: string) {
    alert(feature);
  }

}
