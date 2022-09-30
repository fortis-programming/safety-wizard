import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../main/header/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private headerService: HeaderService
  ) { }

  ngOnInit(): void {
    this.headerService.setTitle('Hello, Allain John!');
  }
}
