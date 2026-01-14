import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondTask } from './second-task';

describe('SecondTask', () => {
  let component: SecondTask;
  let fixture: ComponentFixture<SecondTask>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondTask]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondTask);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
