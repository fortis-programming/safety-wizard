import { Component, OnInit } from '@angular/core';
import { SignupModel } from 'src/app/_shared/models/signup.model';

@Component({
  selector: 'app-account-information',
  templateUrl: './account-information.component.html',
  styleUrls: ['./account-information.component.scss']
})
export class AccountInformationComponent implements OnInit {
  signupModel: SignupModel = {
    firstname: '',
    middlename: '',
    lastname: '',
    gender: '',
    birthdate: new Date(),
    homeAddress: '',
    mobileNumber: '',
    username: '',
    email: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
