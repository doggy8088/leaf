import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.less']
})
export class InputComponent implements OnInit {
  tittle = '输入框';
  inputSize = 'default';
  inputType = 'text';
  validateForm: FormGroup;
  areaRowsValue;
  isRowsShow = false;
  isPreLabelShow = false;
  isAftLabelShow = false;
  inputNzRowValue; // 是否独占一行
  inputRequireValue; // 是否是必填项
  constructor(private fb: FormBuilder) {
    this.validateForm = this.fb.group({
      tittle: [null],
      inputRequire: [null],
      inputName: [null],
      inputSize: ['default'],
      inputType: [null],
      inputSpan: [8, [Validators.min(1), Validators.max(24)]],
      inputLabelSpan: [3, [Validators.min(1), Validators.max(24)]],
      inputAreaRows: [''],
      inputPlaceHolder: [''],
      inputNzRow: [''],
      inputPreIcon: [''],
      inputPreIconLabel: [''],
      inputAftIcon: [''],
      inputAftIconLabel: [''],
    });
    this.validateForm.get('inputType').valueChanges.subscribe(res => {
      if (res === 'textarea') {
        this.isRowsShow = true;
      } else {
        this.isRowsShow = false;
      }
    });
    this.validateForm.get('inputPreIcon').valueChanges.subscribe(res => {
      if (res === '0') {
        this.isPreLabelShow = true;
      } else {
        this.isPreLabelShow = false;
      }
    });
    this.validateForm.get('inputAftIcon').valueChanges.subscribe(res => {
      if (res === '0') {
        this.isAftLabelShow = true;
      } else {
        this.isAftLabelShow = false;
      }
    });
    this.validateForm.get('inputNzRow').valueChanges.subscribe(res => {
      if (res === '1') {
        this.inputNzRowValue = '';
      } else {
        this.inputNzRowValue = 'nz-row';
      }
    });
    this.validateForm.get('inputRequire').valueChanges.subscribe(res => {
      if (res === '1') {
        this.inputRequireValue = '';
      } else {
        this.inputRequireValue = '-required';
      }
    });

  }

  ngOnInit() {
  }

  _submitForm() {

  }
}
