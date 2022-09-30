import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../main/header/header.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  constructor(
    private headerService: HeaderService
  ) { }

  ngOnInit(): void {
    this.headerService.setTitle('Activities');
  }

}
