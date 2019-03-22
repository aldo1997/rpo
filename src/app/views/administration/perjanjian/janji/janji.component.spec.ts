import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JanjiComponent } from './janji.component';

describe('JanjiComponent', () => {
  let component: JanjiComponent;
  let fixture: ComponentFixture<JanjiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JanjiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JanjiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
