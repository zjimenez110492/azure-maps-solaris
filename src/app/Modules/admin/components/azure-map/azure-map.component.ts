import { Coordenada } from './../../models/coordenada.model';
import { Component, Input, OnInit } from '@angular/core';
import * as atlas from 'azure-maps-control';

@Component({
  selector: 'app-azure-map',
  templateUrl: './azure-map.component.html',
  styleUrls: ['./azure-map.component.css']
})
export class AzureMapComponent implements OnInit {
  @Input() longitude: number;
  @Input()  latitude: number;
  constructor() { }

  createMap() {
    var map = new atlas.Map('myMap', {
      language: 'en-US',
      view: 'Auto',
      showBuildingModels: true,
      showLogo: false,
      style: "night",
      zoom: 11,
      center: new atlas.data.Position(-76.5225, 3.43722),
      authOptions: {
        authType: atlas.AuthenticationType.subscriptionKey,
        subscriptionKey: 'Ig7tJXH-UpRatq-pBHaXGy3SdZ7ETJv5LBsvgR-lnd0'
      }
    });
    map.controls.add([
      new atlas.control.ZoomControl(),
      new atlas.control.CompassControl(),
      new atlas.control.PitchControl(),
      new atlas.control.StyleControl()
    ], {
      position: atlas.ControlPosition.TopRight
    });

    map.events.add('ready', function () {
      //Create a data source and add it to the map.
      var dataSource = new atlas.source.DataSource();
      map.sources.add(dataSource);
      //Create a symbol layer to render icons and/or text at points on the map.
      var layer = new atlas.layer.SymbolLayer(dataSource);
      //Add the layer to the map.
      map.layers.add(layer);
      //Create a point and add it to the data source.
      dataSource.add(new atlas.data.Point([-76.5225, 3.43722]));
    })
  }

  ngOnInit(): void {
    this.createMap();
  }
  addPunto(c:Coordenada){
console.log("Coordenada recibida:   ",c);
  }

}
