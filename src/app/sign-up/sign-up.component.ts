import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  constructor() { }

  step = 1;

  ngOnInit(): void {
  }

  proceed(action: number): void {
    if (action)
      this.step = this.step > 0 ? this.step - 1 : this.step;
    else
      this.step = this.step < 3 ? this.step + 1 : this.step;
  }
}
