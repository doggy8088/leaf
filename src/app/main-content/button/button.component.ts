import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less']
})
export class ButtonComponent implements OnInit {
  public tittle = '按钮';
  public validateForm: FormGroup;
  public buttonSize = 'default';
  public buttonType = 'default';
  public buttonShape = '0';
  public buttonLoading = '0';
  public buttonIcon = '0';
  public buttonClick = '0';
  public showShape;
  public isShowLoding = false;
  public isShowShape = false;
  public isShowIcon = false;
  public isShowFunction = false;


  constructor(private fb: FormBuilder) {
    this.validateForm = this.fb.group({
      buttonTittle: [null],
      buttonSize: ['default'],
      buttonType: ['default'],
      buttonShape: ['0'],
      buttonIcon: [null],
      buttonLoading: [null],
      buttonLoadingTittle: [null],
      buttonIconContext: [null],
      buttonClick: [null],
      buttonFunctionContext: [null],
    });
    this.validateForm.get('buttonLoading').valueChanges.subscribe(res => {
      if (res === '1') {
        this.isShowLoding = true;
      } else {
        this.isShowLoding = false;
      }
    });
    this.validateForm.get('buttonIcon').valueChanges.subscribe(res => {
      if (res === '1') {
        this.isShowIcon = true;
      } else {
        this.isShowIcon = false;
      }
    });
    this.validateForm.get('buttonShape').valueChanges.subscribe(res => {
      if (res === '1') {
        this.isShowShape = true;
        this.showShape = 'circle';
      } else {
        this.isShowShape = false;
        this.showShape = '';
      }
    });
    this.validateForm.get('buttonClick').valueChanges.subscribe(res => {
      if (res === '1') {
        this.isShowFunction = true;
      } else {
        this.isShowFunction = false;
      }
    });


  }

  ngOnInit() {
  }

}
