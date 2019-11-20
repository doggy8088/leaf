import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeRuleComponent } from './code-rule.component';

describe('CodeRuleComponent', () => {
  let component: CodeRuleComponent;
  let fixture: ComponentFixture<CodeRuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeRuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
