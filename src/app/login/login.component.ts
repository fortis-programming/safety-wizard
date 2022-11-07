import { Component, OnInit } from '@angular/core';
import { SignupService } from '../services/signup.service';
import { LoginModel } from '../_shared/models/login.model';

import Swal from 'sweetalert2';
import { Router } from '@angular/router';

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

  constructor(
    private signupService: SignupService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  loginUser() {
    let message: string[];
    let modal_title = '', modal_message = '';
    let modal_icon = false;

    ; this.signupService.loginUser(this.loginModel.username, this.loginModel.password)
      .then((result) => {

        message = result.split('/');

        if (message[0] === 'auth') {
          message = result.split('-');
          message = message.join(' ').split('/');
          modal_title = message[1].toString().charAt(0).toUpperCase() + message[1].slice(1);
          modal_message = 'Tap anywhere to close';
          modal_icon = false;
        }
        else {
          sessionStorage.setItem('_token', result);
          modal_title = 'Welcome!'
          modal_message = 'You have successfully logged in'
          modal_icon = true;
        }

        Swal.fire({
          title: modal_title,
          text: modal_message,
          icon: modal_icon ? 'success' : 'error',
          timer: 2000,
          timerProgressBar: true,
          showConfirmButton: false
        }).then(() => {

          if (modal_icon)
            this.router.navigate(['app']);

        })

      }).catch((error) => {
        console.log(error);
      })
  }
}
