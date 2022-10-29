import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qr-scanner',
  templateUrl: './qr-scanner.component.html',
  styleUrls: ['./qr-scanner.component.scss']
})
export class QrScannerComponent implements OnInit {

  public config: Object = {
    width: 'auto',
    text: { fillStyle: 'red' },
    frame: { strokeStyle: 'red' }
  };

  constructor() { }

  ngOnInit(): void {
  }

  public onError(e: any): void {
    alert(e);
  }

  public handle(action: any, fn: string): void {
    action[fn]().subscribe((res: boolean) => console.log(fn + ': ' + res));
  }
}
