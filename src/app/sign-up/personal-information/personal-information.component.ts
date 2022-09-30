import { Component, OnInit } from '@angular/core';
import { SignupModel } from 'src/app/_shared/models/signup.model';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent implements OnInit {
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
