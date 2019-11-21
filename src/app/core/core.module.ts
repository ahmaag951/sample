import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [NavBarComponent, HomeComponent, LoginComponent],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
