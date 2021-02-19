import { HomeUserComponent } from './components/home-user/home-user.component';
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
        path: '',
        component: HomeUserComponent,
        data:
        {
          title: 'Inicio'
        }
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
