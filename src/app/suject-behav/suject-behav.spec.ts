import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SujectBehav } from './suject-behav';

describe('SujectBehav', () => {
  let component: SujectBehav;
  let fixture: ComponentFixture<SujectBehav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SujectBehav]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SujectBehav);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
