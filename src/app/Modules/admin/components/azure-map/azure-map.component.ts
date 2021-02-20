import { CoordenadasService } from './../../services/coordenadas.service';
import { Coordenada } from './../../models/coordenada.model';
import { Component, Input, OnInit } from '@angular/core';
import * as atlas from 'azure-maps-control';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-azure-map',
  templateUrl: './azure-map.component.html',
  styleUrls: ['./azure-map.component.css']
})
export class AzureMapComponent implements OnInit {
  @Input() longitude: number;
  @Input() latitude: number;
  coordenadas: Coordenada[];
  positionNav: number;
  map = null;
  usuario: string;
  indice: number;
  constructor(private coordenadasService: CoordenadasService, public router: Router) { }
  ngOnInit(): void {
    this.indice = 1;
    if (localStorage.getItem('token') == '') {
      this.router.navigateByUrl('');
    }
    this.usuario = localStorage.getItem('usuario');
    this.coordenadas = [];
    this.positionNav = -1;

  }
  ngAfterViewInit(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    this.createMap();
  }

  createMap() {
    let centro: Coordenada;
    this.coordenadasService.getCentro().subscribe(result => {

      centro = result;
      console.log("CENTRO:   ", centro);
      this.map = new atlas.Map('myMap', {
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
  marcarPuntos() {
    this.coordenadasService.getCoordenadas().subscribe(
      result => {
        for (let c of result) {
          this.coordenadas.push(c);
          this.addPunto(c);
        }
      });
  }
  addCoordenada(c:Coordenada){
    this.coordenadas.push(c);
this.addPunto(c);
  }
  moverDerecha() {
    if (this.positionNav < (this.coordenadas.length-1)) {
      this.positionNav++;

    }
    else{
      this.positionNav=0;
    }
    this.map.setCamera({
      bounds: [this.coordenadas[this.positionNav].latitud - 0.003, this.coordenadas[this.positionNav].longitud - 0.003, this.coordenadas[this.positionNav].latitud + 0.003, this.coordenadas[this.positionNav].longitud + 0.003],
      padding: 10
    });
  }
  moverIzquierda() {
    if (this.positionNav > 0) {
      this.positionNav--;

    }
    else{
      this.positionNav=this.coordenadas.length-1;

    }
    this.map.setCamera({
      bounds: [this.coordenadas[this.positionNav].latitud - 0.003, this.coordenadas[this.positionNav].longitud - 0.003, this.coordenadas[this.positionNav].latitud + 0.003, this.coordenadas[this.positionNav].longitud + 0.003],
      padding: 10
    });
  }

  addPunto(c: Coordenada) {
    console.log("Coordenada recibida:   ", c);
    var marker = new atlas.HtmlMarker({
      color: 'DodgerBlue',
      text: (this.indice) + '',
      position: [c.latitud, c.longitud],
      popup: new atlas.Popup({
        content: '<div  style="padding:10px;color:white; max-width: 3.5cm;">' +
          c.descripcion + ' </div> ',
        position: [c.latitud, c.longitud],
        fillColor: 'rgba(0,0,0,0.8)',
        closeButton: false
      })
    });
    this.map.markers.add(marker);
    this.map.events.add('mouseover', marker, () => {
      marker.togglePopup();
    });
    this.indice++;

  }
  cerrar() {
    Swal.fire({
      title: 'Desea Cerrar Sesión?',
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: `Si`,
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        localStorage.setItem('token', '');
        this.router.navigateByUrl('');
        Swal.fire('Sesión Cerrada');
      }
    })
  }
  home() {
    this.router.navigateByUrl('');
  }

}
