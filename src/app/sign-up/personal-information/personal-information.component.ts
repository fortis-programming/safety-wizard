import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SignupModel } from 'src/app/_shared/models/signup.model';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent implements OnInit {
  @Output() data = new EventEmitter<SignupModel>();

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

  constructor() { }

  getMessage(): void {
    this.data.emit(this.signupModel);
  }

  ngOnInit(): void {
    this.getMessage();
  }

  hasError(formControl: any): boolean {
    this.getMessage();
    return formControl.invalid && (formControl.dirty || formControl.touched);
  }

}
