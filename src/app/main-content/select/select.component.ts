import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.less']
})
export class SelectComponent implements OnInit {
  tittle = '选择器';
  validateForm: FormGroup;
  selectNzRowValue;
  selectSize = 'default';
  selectRequireValue;
  selectIsMultipleValue;
  selectSearchValue;
  isShowClear = false;
  isClear = false;
  selectFilterValue;

  constructor(private fb: FormBuilder) {
    this.validateForm = this.fb.group({
      selectTittle: [null],
      selectSize: [null],
      selectLabelSpan: [null],
      selectSpan: [null],
      selectName: [null],
      selectIsClear: [null],
      SelectOptions: [null],
      selectIsMultiple: [null],
      selectUrlName: [null],
      selectUrl: [null],
      selectNotData: [null],
      selectFunctionName: [null],
      selectPlaceHolder: [null],
      selectNzRow: [null],
      selectOpenFunction: [null],
      selectSearch: [null],
      selectRequire: [null],
      selectOptionLabel: [null],
      selectOptionValue: [null],
      selectFilter: [null],
    });
    this.validateForm.get('selectNzRow').valueChanges.subscribe(res => {
      if (res === '0') {
        this.selectNzRowValue = 'nz-row';
      } else {
        this.selectNzRowValue = '';
      }
    });
    this.validateForm.get('selectRequire').valueChanges.subscribe(res => {
      if (res === '0') {
        this.selectRequireValue = '-required';
      } else {
        this.selectRequireValue = '';
      }
    });
    this.validateForm.get('selectIsMultiple').valueChanges.subscribe(res => {
      if (res === '0') {
        this.selectIsMultipleValue = 'multiple';
        this.isShowClear = false;
      } else {
        this.selectIsMultipleValue = 'tag';
        this.isShowClear = true;
      }
    });
    this.validateForm.get('selectIsClear').valueChanges.subscribe(res => {
      if (res === '0') {
        this.isClear = true;
      } else {
        this.isClear = false;
      }
    });
    this.validateForm.get('selectSearch').valueChanges.subscribe(res => {
      if (res === '0') {
        this.selectSearchValue = 'true';
      } else {
        this.selectSearchValue = 'false';
      }
    });
    this.validateForm.get('selectFilter').valueChanges.subscribe(res => {
      if (res === '0') {
        this.selectFilterValue = 'true';
      } else {
        this.selectFilterValue = 'false';
      }
    });
  }

  ngOnInit() {
  }


}
