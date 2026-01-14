import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdTask } from './third-task';

describe('ThirdTask', () => {
  let component: ThirdTask;
  let fixture: ComponentFixture<ThirdTask>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThirdTask]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdTask);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
