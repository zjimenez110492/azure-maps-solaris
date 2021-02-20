import { CoordenadasService } from './../../services/coordenadas.service';
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
  constructor(private coordenadasService:CoordenadasService) { }

  createMap()
  {
    let centro:Coordenada;
    this.coordenadasService.getCentro().subscribe(result=>{

      centro=result;
      console.log("CENTRO:   ",centro);
      this.map= new atlas.Map('myMap', {
        language: 'en-US',
        view: 'Auto',
        showBuildingModels: true,
        showLogo: false,
        style: "night",
        zoom: 11,
        center: new atlas.data.Position(centro.longitud, centro.latitud),
        authOptions: {
          authType: atlas.AuthenticationType.subscriptionKey,
          subscriptionKey: 'Ig7tJXH-UpRatq-pBHaXGy3SdZ7ETJv5LBsvgR-lnd0'
        }
      });
      this.marcarPuntos();
    });
  }
  marcarPuntos(){
    this.coordenadasService.getCoordenadas().subscribe(
      result=>{
        for(let c of result){
          this.addPunto(c);
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
      text: c.descripcion,
      position: [c.latitud, c.longitud],
      popup: new atlas.Popup({
        content: '<div  style="padding:10px;color:white; max-width: 3.5cm;">'+
        c.descripcion+' </div> ',
        position: [c.latitud, c.longitud],
        fillColor: 'rgba(0,0,0,0.8)',
        closeButton: false
      })
      });
      this.map.markers.add(marker);
      this.map.events.add('mouseover',marker, () => {
          marker.togglePopup();
      });

  }

}
