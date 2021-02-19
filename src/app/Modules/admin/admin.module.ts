import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUbicacionesComponent } from './components/list-ubicaciones/list-ubicaciones.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AzureMapComponent } from './components/azure-map/azure-map.component';



@NgModule({
  declarations: [ListUbicacionesComponent, AzureMapComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[]
})
export class AdminModule { }
