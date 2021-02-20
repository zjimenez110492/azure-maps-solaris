import { LoginService } from './../../../admin/services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Modules/admin/models/usuario.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  formulario: FormGroup;
  log=false;
  constructor(private formBuilder: FormBuilder, /* private  authService:  AuthService, */
    public router: Router, private loginService:LoginService) { }

  ngOnInit() {
    this.crearFormulario();
   /*  this.log=this.authService.log; */

  }
 /*  ngDoCheck(): void {
  if(this.authService.isLoggedIn)
  {
    this.router.navigate(['admin']);
  }
  } */
  errores(): boolean
  {
    return (this.formulario.get('email').hasError('required') ||
    this.formulario.get('email').hasError('email') ||this.formulario.get('password').hasError('required')
      ) ? true : false;

  }
  mailError():boolean
  {
    return this.formulario.get('email').hasError('email')?true:false;
  }
  crearFormulario() {
    this.formulario = this.formBuilder.group(
      {
        email: [, [Validators.required, Validators.email]],
        password: [, [Validators.required]],
      });
    this.formulario.valueChanges.subscribe(
      value => {/*
          console.log("Otro valor LOGIN: ", value);  */
      }
    );
  }
  ingresar()
  {
    let u:Usuario={
      usuario:this.formulario.get('email').value,
      password:this.formulario.get('password').value
    };
   this.loginService.onLogin(u).subscribe(result=>{
     console.log("Resultado de login:   ",result);
     if(result.res){
      localStorage.setItem('token',result.token);
      localStorage.setItem('usuario',(u.usuario.split("@"))[0]);
       this.router.navigateByUrl('map');
     }
     else{
      Swal.fire('usuario no registrado');
     }
   })
  }

}
