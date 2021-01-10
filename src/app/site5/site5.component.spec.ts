import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Site5Component } from './site5.component';

describe('Site5Component', () => {
  let component: Site5Component;
  let fixture: ComponentFixture<Site5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Site5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Site5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
