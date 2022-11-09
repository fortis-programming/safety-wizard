import { Component, OnInit } from '@angular/core';
import { HealthCheckService } from '../services/health-check.service';

import { ActivityLogModel } from '../_shared/models/activitylog.model';
import { HealthCheckModel } from '../_shared/models/health-check.model';
import { SignupModel } from '../_shared/models/signup.model';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-qr-scanner',
  templateUrl: './qr-scanner.component.html',
  styleUrls: ['./qr-scanner.component.scss']
})
export class QrScannerComponent implements OnInit {
  userInformation: SignupModel = {
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

  healthCheckModel: HealthCheckModel = {
    temperature: 0,
    symptoms: '',
    date: ''
  };

  public config: Object = {
    width: 'auto',
    text: { fillStyle: 'red' },
    frame: { strokeStyle: 'red' }
  };

  constructor(
    private healthCheckService: HealthCheckService
  ) { }

  ngOnInit(): void {

  }

  public onError(e: any): void {
    alert(e);
  }

  public handle(action: any, fn: string): void {
    action[fn]().subscribe((res: boolean) => console.log(fn + ': ' + res));
  }

  scannerState = false;
  userId = '';
  getBarcodeData(userId: any): void {
    this.scannerState = true;
    this.userId = userId.value;
    this.healthCheckService.getUserInformation(userId.value).then(response => this.userInformation = response);
    this.healthCheckService.checkUserHealth(userId.value).then(response => this.healthCheckModel = response);
  }

  activityLogModel: ActivityLogModel = {
    timeStamp: '',
    fullname: '',
    gender: '',
    establishmentId: '',
    establishmentDescription: '',
    address: '',
    userId: ''
  }

  saveToLog(): void {
    this.activityLogModel.fullname = this.userInformation.lastname + ', ' + this.userInformation.firstname;
    this.activityLogModel.gender = this.userInformation.gender;
    this.activityLogModel.timeStamp = (new Date()).toString();
    this.activityLogModel.userId = this.userId;

    this.healthCheckService.saveActivityToLogs(this.activityLogModel)
      .then((res) => {
        Swal.fire({
          title: 'Saved',
          text: 'Log was successfully saved.',
          icon: res ? 'success' : 'error',
          timer: 2000,
          timerProgressBar: true,
          showConfirmButton: false
        })

        if (res) {
          this.healthCheckModel.symptoms = '';
          this.userInformation.firstname = '';
          this.userInformation.lastname = '';
        }
      }).catch((err) => console.log(err))
  }
}