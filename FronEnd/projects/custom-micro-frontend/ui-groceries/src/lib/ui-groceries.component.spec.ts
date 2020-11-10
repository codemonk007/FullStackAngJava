import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiGroceriesComponent } from './ui-groceries.component';

describe('UiGroceriesComponent', () => {
  let component: UiGroceriesComponent;
  let fixture: ComponentFixture<UiGroceriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiGroceriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiGroceriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
