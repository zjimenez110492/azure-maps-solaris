import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  formulario: FormGroup;
  log=false;
  constructor(private formBuilder: FormBuilder, /* private  authService:  AuthService, */
    public router: Router) { }

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
    /* this.authService.SignIn(
      this.formulario.get('email').value,
      this.formulario.get('password').value
      ); */
  }

}
