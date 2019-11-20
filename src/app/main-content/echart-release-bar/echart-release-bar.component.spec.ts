import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartReleaseBarComponent } from './echart-release-bar.component';

describe('EchartReleaseBarComponent', () => {
  let component: EchartReleaseBarComponent;
  let fixture: ComponentFixture<EchartReleaseBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EchartReleaseBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EchartReleaseBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
