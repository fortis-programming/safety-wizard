import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../main/header/header.service';
import { HealthCheckService } from '../services/health-check.service';
import { ActivityLogModel } from '../_shared/models/activitylog.model';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  constructor(
    private headerService: HeaderService,
    private healthCheckService: HealthCheckService
  ) { }

  activityList: ActivityLogModel[] = [];
  ngOnInit(): void {
    this.headerService.setTitle('Activities');
    this.healthCheckService.getUserActivityLogs().then(response => this.activityList = response);

  }
}
