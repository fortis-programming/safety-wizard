import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from './signup.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(
    private auth: SignupService,
    private router: Router
  ) { }

  canActivate() {
    if (this.auth.isAuthenticated()) return true;

    this.router.navigate(['login']);
    return false;
  }
}
