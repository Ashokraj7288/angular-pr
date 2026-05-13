import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectWork } from './project-work';

describe('ProjectWork', () => {
  let component: ProjectWork;
  let fixture: ComponentFixture<ProjectWork>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectWork]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectWork);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
