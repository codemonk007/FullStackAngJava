import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiBooksComponent } from './ui-books.component';

describe('UiBooksComponent', () => {
  let component: UiBooksComponent;
  let fixture: ComponentFixture<UiBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
