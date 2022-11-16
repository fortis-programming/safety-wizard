import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainScannerRoutingModule } from './main-scanner-routing.module';
import { RouterModule } from '@angular/router';

// COMPONENTS
import { MainScannerComponent } from './main-scanner.component';
import { ScannerHeaderComponent } from './scanner-header/scanner-header.component';
import { ScannerNavigationComponent } from './scanner-navigation/scanner-navigation.component';

@NgModule({
  declarations: [MainScannerComponent, ScannerHeaderComponent, ScannerNavigationComponent],
  imports: [
    CommonModule,
    MainScannerRoutingModule,
    RouterModule
  ]
})
export class MainScannerModule { }
