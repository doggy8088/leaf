import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartsFixLineBarComponent } from './echarts-fix-line-bar.component';

describe('EchartsFixLineBarComponent', () => {
  let component: EchartsFixLineBarComponent;
  let fixture: ComponentFixture<EchartsFixLineBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EchartsFixLineBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EchartsFixLineBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
