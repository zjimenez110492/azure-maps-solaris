import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeUserComponent } from './components/home-user/home-user.component';
import { LoginUserComponent } from './components/login-user/login-user.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button'

@NgModule({
  declarations: [HomeUserComponent, LoginUserComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class UserModule { }
