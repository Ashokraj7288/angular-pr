import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsPra } from './rxjs-pra';

describe('RxjsPra', () => {
  let component: RxjsPra;
  let fixture: ComponentFixture<RxjsPra>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsPra]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsPra);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
