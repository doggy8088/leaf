import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.less']
})
export class BreadcrumbComponent implements OnInit {
  tittle = '面包屑';
  validateForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.validateForm = this.fb.group({
      first: [null],
      second: [null],
      third: [null],
      forth: [null],
      fifth: [null],
      default: [null],
      firstRouter: [null],
      secondRouter: [null],
      thirdRouter: [null],
      forthRouter: [null],
      fifthRouter: [null]
    });
  }

  ngOnInit() {
  }

}
