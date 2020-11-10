import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiClothsComponent } from './ui-cloths.component';

describe('UiClothsComponent', () => {
  let component: UiClothsComponent;
  let fixture: ComponentFixture<UiClothsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiClothsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiClothsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
