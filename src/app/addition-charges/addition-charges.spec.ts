import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionCharges } from './addition-charges';

describe('AdditionCharges', () => {
  let component: AdditionCharges;
  let fixture: ComponentFixture<AdditionCharges>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdditionCharges]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdditionCharges);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
