import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { LoginModel } from '../_shared/models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginModel: LoginModel = {
    username: '',
    password: ''
  }

  constructor() { }

  ngOnInit(): void {
  }
}
