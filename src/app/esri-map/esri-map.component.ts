import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { loadModules } from 'esri-loader';
import esri = __esri; // Esri TypeScript Types

@Component({
  selector: 'app-esri-map',
  templateUrl: './esri-map.component.html',
  styleUrls: ['./esri-map.component.css']
})
export class EsriMapComponent implements OnInit {

  @Output() mapLoadedEvent = new EventEmitter<boolean>();

  // The <div> where we will place the map
  @ViewChild('mapViewNode') private mapViewEl: ElementRef;

  /**
   * _zoom sets map zoom
   * _center sets map center
   * _basemap sets type of map
   * _loaded provides map loaded status
   */
  private _zoom = 10;
  private _center: Array<number> = [0.1278, 51.5074];
  private _basemap = 'streets';
  private _loaded = false;
  map: esri.Map;
  pt:esri.Point;

  get mapLoaded(): boolean {
    return this._loaded;
  }

  @Input()
  set zoom(zoom: number) {
    this._zoom = zoom;
  }

  get zoom(): number {
    return this._zoom;
  }

  @Input()
  set center(center: Array<number>) {
    this._center = center;
  }

  get center(): Array<number> {
    return this._center;
  }

  @Input()
  set basemap(basemap: string) {
    this._basemap = basemap;
  }

  get basemap(): string {
    return this._basemap;
  }

  constructor() { }

  async initializeMap() {
    try {

      // Load the modules for the ArcGIS API for JavaScript
      const [EsriMap, EsriMapView,Point,SimpleMarkerSymbol] = await loadModules([
        'esri/Map',
        'esri/views/MapView',
        'esri/geometry/Point',
        "esri/symbols/SimpleMarkerSymbol"
      ]);

      // Configure the Map
      const mapProperties: esri.MapProperties = {
        basemap: this._basemap
      };

      this.map = new EsriMap(mapProperties);

      // Initialize the MapView
      const mapViewProperties: esri.MapViewProperties = {
        container: this.mapViewEl.nativeElement,
        center: this._center,
        zoom: this._zoom,
        map: this.map
      };

      this.pt = new  Point ( { longitude: this._center[0], latitude: this._center[1] })
      
       console.log(this._center);
      return new EsriMapView(mapViewProperties);

    } catch (error) {
      console.log('EsriLoader: ', error);
    }

  }

  async addGraphic(pt,map){
    const [Point,SimpleMarkerSymbol,SimpleLineSymbol
      ,Graphic,Color] = await loadModules([
      'esri/geometry/Point',
      "esri/symbols/SimpleMarkerSymbol",
      "esri/symbols/SimpleLineSymbol",
      "esri/Graphic", "esri/Color"
    ]);
    var symbol:esri.SimpleMarkerSymbol = new SimpleMarkerSymbol(
      SimpleMarkerSymbol.STYLE_CIRCLE, 
      12, 
      new SimpleLineSymbol(
        SimpleLineSymbol.STYLE_SOLID,
        new Color([210, 105, 30, 0.5]), 
        8
      ), 
      new Color([210, 105, 30, 0.9])
    );
    const graphic:esri.Graphic = new Graphic(pt, symbol);
    map.graphics.add(graphic);

    const simpleMarkerSymbol1: esri.SimpleMarkerSymbol = new SimpleMarkerSymbol( 
      SimpleMarkerSymbol.STYLE_CIRCLE, 
      12,
      new Color ([226, 119, 40]) );
    
    const point1:esri.Point = new  Point({ longitude: pt.longitude, latitude: pt.latitude });

  
    var pointGraphic:esri.Graphic = new Graphic({
      geometry: point1,
      symbol: simpleMarkerSymbol1
    });
    // map.graphics.add(pointGraphic);
  }


  // Finalize a few things once the MapView has been loaded
  houseKeeping(mapView) {
    mapView.when(() => {
       this.addGraphic(this.pt,mapView);
      console.log('mapView ready: ', mapView.ready);
      this._loaded = mapView.ready;
      this.mapLoadedEvent.emit(true);
    });
  }

  ngOnInit() {
    // Initialize MapView and return an instance of MapView
    this.initializeMap().then((mapView) => {
      this.houseKeeping(mapView);

    });
  }

}