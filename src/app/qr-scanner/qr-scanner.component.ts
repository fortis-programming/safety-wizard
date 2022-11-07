import { Component, Input, OnInit } from '@angular/core';
import { HealthCheckService } from '../services/health-check.service';
import { HealthCheckModel } from '../_shared/models/health-check.model';
import { SignupModel } from '../_shared/models/signup.model';

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
    isScanner: false
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
  getBarcodeData(userId: any): void {
    this.scannerState = true;
    this.healthCheckService.getUserInformation(userId.value).then(response => this.userInformation = response);
    this.healthCheckService.checkUserHealth(userId.value).then(response => this.healthCheckModel = response);
  }
}