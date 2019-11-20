import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-code-rule',
  templateUrl: './code-rule.component.html',
  styleUrls: ['./code-rule.component.less']
})
export class CodeRuleComponent implements OnInit {
  tittle = '规范守则';
  validateForm: FormGroup;

  constructor() {
  }

  ngOnInit() {
  }

}
