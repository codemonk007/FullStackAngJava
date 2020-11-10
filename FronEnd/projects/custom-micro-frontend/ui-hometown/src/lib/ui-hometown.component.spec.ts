import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiHometownComponent } from './ui-hometown.component';

describe('UiHometownComponent', () => {
  let component: UiHometownComponent;
  let fixture: ComponentFixture<UiHometownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiHometownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiHometownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
