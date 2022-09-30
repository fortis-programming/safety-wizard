import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../main/header/header.service';

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

  selectedSymptoms: string[] = [];

  constructor(
    private headerService: HeaderService
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
    console.log(this.selectedSymptoms);
    console.log(this.selectedSymptoms.indexOf(symptom));
  }

  checkSymptoms(symptom: string): boolean {
    return this.selectedSymptoms.includes(symptom);
  }
}
