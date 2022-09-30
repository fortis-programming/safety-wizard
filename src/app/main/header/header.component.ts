import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private headerService: HeaderService
  ) { }

  ngOnInit(): void {
    this.headerService.setTitle('Activities');
  }

  getTitle(): string {
    return this.headerService.getTitle();
  }
}
