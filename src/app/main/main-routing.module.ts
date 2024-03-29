import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";

import { MainComponent } from './main.component';

//  ROUTES
import { route as HomeRoute } from '../home/home-route.module';
import { route as ActivityRoute } from '../activity/activity-route.module';
import { route as HealthCheckRoute } from '../health-check/health-check-route.module';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      ...HomeRoute,
      ...ActivityRoute,
      ...HealthCheckRoute,
    ]
  }
];

// let routes: Routes = [];

// if (sessionStorage.getItem('_isScanner') === 'true') {
//   routes = [
//     {
//       path: '',
//       component: MainComponent,
//       children: [
//         { path: '', redirectTo: 'qr-scanner', pathMatch: 'full' },
//         ...HomeRoute,
//         ...ActivityRoute,
//         ...HealthCheckRoute,
//         ...QRScannerRoute
//       ]
//     }
//   ];
// }
// else {
//   routes = [
//     {
//       path: '',
//       component: MainComponent,
//       children: [
//         { path: '', redirectTo: 'home', pathMatch: 'full' },
//         ...HomeRoute,
//         ...ActivityRoute,
//         ...HealthCheckRoute,
//         ...QRScannerRoute
//       ]
//     }
//   ];
// }

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})

export class MainRoutingModule { }
