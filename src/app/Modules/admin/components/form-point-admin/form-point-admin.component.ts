import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Coordenada } from '../../models/coordenada.model';

@Component({
  selector: 'app-form-point-admin',
  templateUrl: './form-point-admin.component.html',
  styleUrls: ['./form-point-admin.component.css']
})
export class FormPointAdminComponent implements OnInit {
  formulario: FormGroup;
  @Output() coordenada = new EventEmitter<Coordenada>();
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.crearFormulario();
  }
  crearFormulario() {
    this.formulario = this.formBuilder.group(
      {
        latitud: [, [Validators.required]],
        longitud: [, [Validators.required]],
      });
    this.formulario.valueChanges.subscribe(
      value => {/*
          console.log("Otro valor LOGIN: ", value);  */
      }
    );
  }
  errores(): boolean
  {
    return (this.formulario.get('latitud').hasError('required') ||
    this.formulario.get('longitud').hasError('required')
      ) ? true : false;

  }
  onSubmit()
  {
      let c:Coordenada={
        latitud:this.formulario.get('latitud').value,
        longitud:this.formulario.get('longitud').value
      }
      this.coordenada.emit(c);
  }
}
