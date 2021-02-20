import { GuardAdminGuard } from './guard-admin.guard';
import { AzureMapComponent } from './components/azure-map/azure-map.component';

import { ListUbicacionesComponent } from './components/list-ubicaciones/list-ubicaciones.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Inicio'
    },
    children: [
      {
        path: 'listar',
        component: ListUbicacionesComponent,
        data:
        {
          title: 'Listar Ubicaciones'
        }
      },
      {
        path: 'map',
        component: AzureMapComponent,
        canActivate: [GuardAdminGuard],
        data:
        {
          title: 'Mapa'
        }
      }

    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

