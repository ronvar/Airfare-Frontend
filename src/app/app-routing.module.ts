import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { GetDataComponent } from './get-data/get-data.component';
import { HomeComponent } from './home/home.component';
import {LoginComponent} from './login/login.component';


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'home' , component: HomeComponent},
  { path: 'get-data', component: GetDataComponent },
  { path: 'login', component: LoginComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})

export class AppRoutingModule { }
