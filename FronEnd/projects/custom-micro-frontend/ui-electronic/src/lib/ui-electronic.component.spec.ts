import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiElectronicComponent } from './ui-electronic.component';

describe('UiElectronicComponent', () => {
  let component: UiElectronicComponent;
  let fixture: ComponentFixture<UiElectronicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiElectronicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiElectronicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
