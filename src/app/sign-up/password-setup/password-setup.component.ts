import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SignupService } from 'src/app/services/signup.service';
import { PasswordModels } from 'src/app/_shared/models/password.model';
import { SignupModel } from 'src/app/_shared/models/signup.model';

@Component({
  selector: 'app-password-setup',
  templateUrl: './password-setup.component.html',
  styleUrls: ['./password-setup.component.scss']
})
export class PasswordSetupComponent implements OnInit {
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
    isScanner: false
  }

  constructor() { }

  ngOnInit(): void {
  }

  hasError(formControl: any): boolean {
    return formControl.invalid && (formControl.dirty || formControl.touched);
  }
}
