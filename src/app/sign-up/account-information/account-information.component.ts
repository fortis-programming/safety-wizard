import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SignupModel } from 'src/app/_shared/models/signup.model';

@Component({
  selector: 'app-account-information',
  templateUrl: './account-information.component.html',
  styleUrls: ['./account-information.component.scss']
})
export class AccountInformationComponent implements OnInit {
  @Output() data = new EventEmitter<SignupModel>();
  @Input() signupModel: SignupModel = {
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

  ngOnInit(): void {
    console.log(this.signupModel);
  }

  getData(): void {
    this.data.emit(this.signupModel);
  }

  hasError(formControl: any): boolean {
    return formControl.invalid && (formControl.dirty || formControl.touched);
  }
}
