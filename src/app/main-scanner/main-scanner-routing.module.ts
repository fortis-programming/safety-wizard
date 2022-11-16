import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainScannerComponent } from './main-scanner.component';

// ROUTES
import { route as QRScannerRoute } from '../qr-scanner/qr-scanner-route.module'

const routes: Routes = [
  {
    path: '',
    component: MainScannerComponent,
    children: [
      { path: '', redirectTo: 'qr-scanner', pathMatch: 'full' },
      ...QRScannerRoute
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MainScannerRoutingModule { }
