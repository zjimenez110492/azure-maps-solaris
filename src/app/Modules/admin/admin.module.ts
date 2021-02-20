import { LoginService } from './services/login.service';
import { CoordenadasService } from './services/coordenadas.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUbicacionesComponent } from './components/list-ubicaciones/list-ubicaciones.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AzureMapComponent } from './components/azure-map/azure-map.component';
import { FormPointAdminComponent } from './components/form-point-admin/form-point-admin.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './services/token-interceptor.service';

@NgModule({
  declarations: [ListUbicacionesComponent, AzureMapComponent, FormPointAdminComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
  ],
  exports:[],
  providers:[CoordenadasService, LoginService]
})
export class AdminModule { }
