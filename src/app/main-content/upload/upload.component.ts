import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.less']
})
export class UploadComponent implements OnInit {
  tittle = '上传Upload';
  validateForm: FormGroup;
  uploadSize = 'default';
  uploadIconValue = '<i class="anticon anticon-upload"></i>';
  isMultipleShow = false;
  isIconShow = false;
  uploadMultiple;
  uploadType;

  uploadNzRowValue;
  uploadRequireValue;
  fileList1;

  constructor(private fb: FormBuilder) {
    this.validateForm = this.fb.group({
      tittle: [null],
      uploadTittle: [null],
      uploadFileLists: [null],
      uploadLabelSpan: [null],
      uploadSpan: [null],
      uploadSize: [null],
      uploadUrlName: [null],
      uploadUrl: [null],
      uploadType: [null],
      uploadLimit: [null],
      uploadNzRow: [null],
      uploadFileType: [null],
      uploadBeforeFunction: [null],
      uploadRemoveFile: [null],
      uploadHandStatusChange: [null],
      uploadRequire: [null],
      uploadIconShow: [null],
    });
    this.validateForm.get('uploadNzRow').valueChanges.subscribe(res => {
      if (res === '0') {
        this.uploadNzRowValue = 'nz-row';
      } else {
        this.uploadNzRowValue = '';
      }
    });
    this.validateForm.get('uploadRequire').valueChanges.subscribe(res => {
      if (res === '0') {
        this.uploadRequireValue = '-required';
      } else {
        this.uploadRequireValue = '';
      }
    });
    this.validateForm.get('uploadType').valueChanges.subscribe(res => {
      if (res === '0') {
        this.isMultipleShow = true;
        this.uploadMultiple = 'true';
      } else {
        this.isMultipleShow = false;
        this.uploadMultiple = 'false';
      }
    });
    this.validateForm.get('uploadIconShow').valueChanges.subscribe(res => {
      if (res === '0') {
        this.isIconShow = true;
      } else {
        this.isIconShow = false;
      }
    });
  }

  ngOnInit() {

  }

  beforeUpload = (file: File, fileList) => {

  };

  private getBase64(txt: File, callback: (img: any) => void) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsText(txt);
  }

  handleChange(item, {file, fileList}) {
    const status = file.status;
    if (status !== 'uploading') {

    }
    if (status === 'done') {
      if (file.response.result) {

      }
      this.getBase64(file.originFileObj, (text: any) => {

      });
    } else if (status === 'error') {

    }
  }

  removeUpload = (file: File, fileList) => {

    return true;
  }

  hangd(item, {file, fileList}) {
    const status = file.status;
// status为文件上传的状态在
    if (status !== 'uploading') {
// 文件在非上传状态做的动作
    }
    if (status === 'done') {
// 文件上传完成以后做的动作
      if (file.response.result) {
      }
      this.getBase64(file.originFileObj, (text: any) => {
// text：文件解析
      });
    } else if (status === 'error') {
// 上传发生错误时所进行的动作
    }
  }


}
