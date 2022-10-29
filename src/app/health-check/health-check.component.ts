import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../main/header/header.service';
import { HealthCheckService } from '../services/health-check.service';

import { HealthCheckModel } from '../_shared/models/health-check.model';

import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-health-check',
  templateUrl: './health-check.component.html',
  styleUrls: ['./health-check.component.scss']
})
export class HealthCheckComponent implements OnInit {
  symptoms = [
    {
      'id': 0,
      'name': 'Dry Cough'
    },
    {
      'id': 1,
      'name': 'Runny nose'
    },
    {
      'id': 2,
      'name': 'High Fever'
    },
    {
      'id': 3,
      'name': 'Headache'
    }
  ];

  healthCheckModel: HealthCheckModel = {
    temperature: 0,
    symptoms: '',
    date: ''
  };

  selectedSymptoms: string[] = [];

  constructor(
    private headerService: HeaderService,
    private healthCheck: HealthCheckService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.headerService.setTitle('Health Check');
  }

  selectSymptoms(symptom: string): void {
    if (this.checkSymptoms(symptom)) {
      this.selectedSymptoms.splice(this.selectedSymptoms.indexOf(symptom), 1);
    } else {
      this.selectedSymptoms.push(symptom);
    }
  }

  checkSymptoms(symptom: string): boolean {
    return this.selectedSymptoms.includes(symptom);
  }

  nextStep(): void {
    Swal.fire({
      title: 'Enter your IP address',
      input: 'number',
      inputLabel: 'Your IP address',
      showCancelButton: true
    }).then((input) => {
      if (input.value === '' || input.value === null)
        alert('Please enter temperature value!');
      else
        this.submitSymptoms(input.value);
    })
  }

  submitSymptoms(temperature: number): void {
    this.healthCheckModel.date = new Date().toString();
    this.healthCheckModel.temperature = temperature;
    this.healthCheckModel.symptoms = this.selectedSymptoms.join(', ').toString();
    this.healthCheck.saveUserSymptoms(this.healthCheckModel)
      .then((result) => {
        if (result) {
          Swal.fire({
            title: 'Health Complete',
            text: 'You have successfully sumbmitted your status',
            icon: 'success',
            timer: 2000,
            showConfirmButton: false
          }).then(() => {
            this.router.navigate(['../app/home']);
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }
}
