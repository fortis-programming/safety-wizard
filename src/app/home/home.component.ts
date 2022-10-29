import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../main/header/header.service';
import { HealthCheckService } from '../services/health-check.service';
import { NgxScannerQrcodeService, SelectedFiles } from 'ngx-scanner-qrcode';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  myAngularxQrCode = '';
  scan = false;

  constructor(
    private headerService: HeaderService,
    private router: Router,
    private healthcheckService: HealthCheckService
  ) { }

  public config: Object = {
    width: 'auto',
    text: { fillStyle: 'red' },
    frame: { strokeStyle: 'red' }
  };

  healthCheckStatus = false;

  ngOnInit(): void {
    this.headerService.setTitle('Hello, Allain John!');
    this.submitHealthCheck();
  }

  generateQR(): void {
    this.myAngularxQrCode = JSON.parse(JSON.stringify(sessionStorage.getItem('_userid')));
  }

  submitHealthCheck(): void {
    this.healthcheckService.checkHealthSubmission()
      .then((result) => {
        this.healthCheckStatus = result;

        // else {
        //   Swal.fire({
        //     title: 'Health check submitted!',
        //     text: 'You can submit again after 24hrs.',
        //     icon: 'warning',
        //     timer: 3000,
        //     showConfirmButton: false
        //   })
        // }
      })
      .catch((error) => {

      })

  }

  public onError(e: any): void {
    alert(e);
  }

  public handle(action: any, fn: string): void {
    action[fn]().subscribe((res: boolean) => console.log(fn + ': ' + res));
  }
}
