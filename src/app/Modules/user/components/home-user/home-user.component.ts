import { Router } from '@angular/router';
import { Usuario } from './../../../admin/models/usuario.model';
import { LoginService } from './../../../admin/services/login.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css']
})
export class HomeUserComponent implements OnInit {
  isLogged:boolean;
  usuario:string;
  constructor(private loginService: LoginService, private router:Router) { }

  ngOnInit(): void {
this.isLogged=this.loginService.isLogged;
this.usuario=localStorage.getItem('usuario');
  }
  map(){
this.router.navigateByUrl('map');
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
        this.loginService.cerrarSesion();
        Swal.fire('Sesión Cerrada');
        this.ngOnInit();
      }
    })
  }
}
