import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiFootwearComponent } from './ui-footwear.component';

describe('UiFootwearComponent', () => {
  let component: UiFootwearComponent;
  let fixture: ComponentFixture<UiFootwearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiFootwearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiFootwearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
