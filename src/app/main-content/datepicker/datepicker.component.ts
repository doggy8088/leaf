import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.less']
})
export class DatepickerComponent implements OnInit {
  title = '日期选择框';
  validateForm: FormGroup;
  _disable = false;
  subTitle;
  inputNzRowValue;

  constructor(private fb: FormBuilder) {
    this.validateForm = this.fb.group({
      subTitle: [null],
      _disable: ['false'],
      place: [''],
      inputNzRow: [''],
      dateLabelSpan: [3, [Validators.min(1), Validators.max(24)]],
      dateSpan: [8, [Validators.min(1), Validators.max(24)]],
      dateSign: ['']
    });
    this.validateForm.get('inputNzRow').valueChanges.subscribe(res => {
      if (res === '1') {
        this.inputNzRowValue = '';
      } else {
        this.inputNzRowValue = 'nz-row';
      }
    });
  }

  ngOnInit() {
  }

}
