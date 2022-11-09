import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from '../services/signup.service';
import { SignupModel } from '../_shared/models/signup.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signupModel: SignupModel = {
    firstname: '',
    middlename: '',
    lastname: '',
    gender: '',
    birthdate: new Date(),
    homeAddress: '',
    mobileNumber: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    isScanner: false,
    establishmentDescription: ''
  }

  constructor(
    private signupService: SignupService,
    private router: Router
  ) { }

  step = 1;

  ngOnInit(): void {
  }

  createUser(): void {
    this.signupService.signUpUser(this.signupModel.email, this.signupModel.password, this.signupModel)
      .then((response) => {
        console.log(response);
        this.router.navigate(['../login']);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  getDataFromChild(data: any): void {
    this.signupModel = data;
  }

  proceed(action: number): void {
    console.log(this.signupModel);
    if (action)
      this.step = this.step > 0 ? this.step - 1 : this.step;
    else
      this.step = this.step < 3 ? this.step + 1 : this.step;
  }
}
