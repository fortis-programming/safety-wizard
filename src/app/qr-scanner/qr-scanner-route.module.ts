import { Routes } from "@angular/router";
import { QRCodeComponent } from "angularx-qrcode";

export const route: Routes = [
  {
    path: 'qr-scanner',
    component: QRCodeComponent
  }
]