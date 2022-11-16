import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScannerHeaderComponent } from './scanner-header.component';

describe('ScannerHeaderComponent', () => {
  let component: ScannerHeaderComponent;
  let fixture: ComponentFixture<ScannerHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScannerHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScannerHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
