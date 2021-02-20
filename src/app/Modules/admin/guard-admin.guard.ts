import { LoginService } from './services/login.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class GuardAdminGuard implements CanActivate {
  constructor(private authService:LoginService, private router:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (!this.authService.is_Logged()) {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'No se ha Iniciado Sesión',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigate(['']);
        return false;
    }
    else {
   /*
    this.router.navigate(['/map']); */
      return true;}
  }

}
