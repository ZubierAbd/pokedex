import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Generation3Component } from './generation3.component';

describe('Generation3Component', () => {
  let component: Generation3Component;
  let fixture: ComponentFixture<Generation3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Generation3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Generation3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
