import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import { MainComponent } from './main.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    MainComponent,
    NavigationComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    RouterModule
  ]
})
export class MainModule { }
