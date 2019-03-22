import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerkembanganComponent } from './perkembangan.component';

describe('PerkembanganComponent', () => {
  let component: PerkembanganComponent;
  let fixture: ComponentFixture<PerkembanganComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerkembanganComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerkembanganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
