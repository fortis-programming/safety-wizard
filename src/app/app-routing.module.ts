import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

//  COMPONENTS
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

//  SERVICES
import { AuthGuardService } from './services/auth-guard.service';

let routes: Routes = [];

if (sessionStorage.getItem('_isScanner') == 'true') {
  routes = [
    {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    },
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'sign-up',
      component: SignUpComponent
    },
    {
      path: 'app',
      loadChildren: () => import('./main-scanner/main-scanner.module').then((m) => m.MainScannerModule),
      canActivate: [AuthGuardService]
    }
  ];
}
else {
  routes = [
    {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    },
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'sign-up',
      component: SignUpComponent
    },
    {
      path: 'app',
      loadChildren: () => import('./main/main.module').then((m) => m.MainModule),
      canActivate: [AuthGuardService]
    }
  ];
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true })
  ]
})
export class AppRoutingModule { }