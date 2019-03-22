import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerjanjianComponent } from './perjanjian.component';

describe('PerjanjianComponent', () => {
  let component: PerjanjianComponent;
  let fixture: ComponentFixture<PerjanjianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerjanjianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerjanjianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
