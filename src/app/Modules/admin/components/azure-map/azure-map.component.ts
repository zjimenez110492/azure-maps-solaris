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
  map=null;
  constructor() { }

  createMap() {
    this.map= new atlas.Map('myMap', {
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

  }

  ngOnInit(): void {
    this.createMap();
  }
  addPunto(c:Coordenada)
  {
    console.log("Coordenada recibida:   ",c);
    var marker = new atlas.HtmlMarker({
      color: 'DodgerBlue',
      text: '10',
      position: [c.latitud, c.longitud],
      popup: new atlas.Popup({
          content: '<div style="padding:10px">Hello World</div>',
          pixelOffset: [0, -30]
      })
  });
  this.map.markers.add(marker);

//Add a click event to toggle the popup.
this.map.events.add('click',marker, () => {
    marker.togglePopup();
});
  }

}
