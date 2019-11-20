import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepTaskNodeComponent } from './step-task-node.component';

describe('StepTaskNodeComponent', () => {
  let component: StepTaskNodeComponent;
  let fixture: ComponentFixture<StepTaskNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepTaskNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepTaskNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
