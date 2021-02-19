import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUbicacionesComponent } from './components/list-ubicaciones/list-ubicaciones.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AzureMapComponent } from './components/azure-map/azure-map.component';
import { FormPointAdminComponent } from './components/form-point-admin/form-point-admin.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [ListUbicacionesComponent, AzureMapComponent, FormPointAdminComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ],
  exports:[]
})
export class AdminModule { }
