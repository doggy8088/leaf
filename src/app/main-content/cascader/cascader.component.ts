import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {validate} from 'codelyzer/walkerFactory/walkerFn';


@Component({
  selector: 'app-cascader',
  templateUrl: './cascader.component.html',
  styleUrls: ['./cascader.component.less']
})
export class CascaderComponent implements OnInit {
  title = '级联选择';
  validateForm: FormGroup;
  inputNzRow;
  _disable = false;
  selectList = [
    {
      id: '1', name: 'cascader1', children: [
        {id: '11', name: 'cascader11', isLeaf: true},
        {id: '12', name: 'cascader12', isLeaf: true}
      ]
    },
    {
      id: '2', name: 'cascader2', children: [
        {id: '21', name: 'cascader21', isLeaf: true},
        {id: '22', name: 'cascader22', isLeaf: true}
      ]
    },
    {
      id: '3', name: 'cascader3', children: [
        {id: '31', name: 'cascader31', isLeaf: true},
        {id: '32', name: 'cascader32', isLeaf: true}
      ]
    },
  ];
  constructor(private fb: FormBuilder) {
    this.validateForm = this.fb.group({
      cascaderLabelContent: [null],
      urlName: [null],
      urlAddress: [null],
      _disable: ['false'],
      cascaderLabelWidth: [3, [Validators.min(1), Validators.max(24)]],
      cascaderSelectionWidth: [8, [Validators.min(1), Validators.max(24)]],
      valueName: [null],
      labelName: [null],
      cascaderPlaceHolder: [null],
      cascaderNzRow: [''],
      cascaderSign: [null],
      listName: ['selectList'],
      methodName: [null]
    });
  }

  ngOnInit() {
  }

}
