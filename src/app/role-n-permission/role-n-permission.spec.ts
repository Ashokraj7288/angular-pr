import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleNPermission } from './role-n-permission';

describe('RoleNPermission', () => {
  let component: RoleNPermission;
  let fixture: ComponentFixture<RoleNPermission>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoleNPermission]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoleNPermission);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
