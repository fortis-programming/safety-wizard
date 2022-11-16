import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScannerNavigationComponent } from './scanner-navigation.component';

describe('ScannerNavigationComponent', () => {
  let component: ScannerNavigationComponent;
  let fixture: ComponentFixture<ScannerNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScannerNavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScannerNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
