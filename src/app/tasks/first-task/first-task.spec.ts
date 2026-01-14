import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstTask } from './first-task';

describe('FirstTask', () => {
  let component: FirstTask;
  let fixture: ComponentFixture<FirstTask>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstTask]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstTask);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
