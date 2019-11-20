import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppVersionControlComponent } from './app-version-control.component';

describe('AppVersionControlComponent', () => {
  let component: AppVersionControlComponent;
  let fixture: ComponentFixture<AppVersionControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppVersionControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppVersionControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
