import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootwearComponent } from './footwear.component';

describe('FootwearComponent', () => {
  let component: FootwearComponent;
  let fixture: ComponentFixture<FootwearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootwearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootwearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
