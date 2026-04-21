import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInfor } from './admin-infor';

describe('AdminInfor', () => {
  let component: AdminInfor;
  let fixture: ComponentFixture<AdminInfor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminInfor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminInfor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
