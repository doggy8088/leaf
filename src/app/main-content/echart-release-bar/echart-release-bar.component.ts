import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-echart-release-bar',
  templateUrl: './echart-release-bar.component.html',
  styleUrls: ['./echart-release-bar.component.less']
})
export class EchartReleaseBarComponent implements OnInit {
  tittle = '纵向柱状图';
  validateForm: FormGroup;
  optionReleaseBar: any;
  releaseBarLeft = '3%';
  releaseBarTop = '3%';
  releaseBarColor = '#ccc';
  releaseBarShow = 'shadow';
  releaseBarXAxisDataType = 'category';
  releaseBarYAxisDataType = 'value';
  releaseBarWidth = '60%';
  releaseBarFont = '访问信息量';
  releaseBarXData = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  releaseBarYData = [10, 52, 200, 334, 390, 330, 220];

  constructor(private fb: FormBuilder) {
    this.validateForm = this.fb.group({
      releaseBarUrlName: [null],
      releaseBarUrl: [null],
      releaseBarLeft: ['5%'],
      releaseBarTop: ['3%'],
      releaseBarColor: ['#ccc'],
      releaseBarShow: ['shadow'],
      releaseBarXAxisDataType: [null],
      releaseBarYAxisDataType: [null],
      releaseBarWidth: ['50%'],
      releaseBarFont: ['访问信息量'],
    });
    this.validateForm.get('releaseBarLeft').valueChanges.subscribe(res => {
      this.releaseBarLeft = res;
      this.getReleaseBarOption();
    });
    this.validateForm.get('releaseBarTop').valueChanges.subscribe(res => {
      this.releaseBarTop = res;
      this.getReleaseBarOption();
    });
    this.validateForm.get('releaseBarColor').valueChanges.subscribe(res => {
      this.releaseBarColor = res;
      this.getReleaseBarOption();
    });
    this.validateForm.get('releaseBarShow').valueChanges.subscribe(res => {
      this.releaseBarShow = res;
      this.getReleaseBarOption();
    });
    this.validateForm.get('releaseBarXAxisDataType').valueChanges.subscribe(res => {
      this.releaseBarXAxisDataType = res;
      this.getReleaseBarOption();
    });
    this.validateForm.get('releaseBarYAxisDataType').valueChanges.subscribe(res => {
      this.releaseBarYAxisDataType = res;
      this.getReleaseBarOption();
    });
    this.validateForm.get('releaseBarWidth').valueChanges.subscribe(res => {
      this.releaseBarWidth = res;
      this.getReleaseBarOption();
    });
    this.validateForm.get('releaseBarFont').valueChanges.subscribe(res => {
      this.releaseBarFont = res;
      this.getReleaseBarOption();
    });
  }

  ngOnInit() {
    this.getReleaseBarOption();
  }

  getReleaseBarOption() {
    // this.httpService._get().subscribe(res => {
    //   res.Xdata = this.releaseBarXData;
    //   res.Ydata = this.releaseBarYData;
    this.optionReleaseBar = {
      color: [this.releaseBarColor],
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: this.releaseBarShow        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        left: this.releaseBarLeft,
        right: '4%',
        bottom: this.releaseBarTop,
        containLabel: true
      },
      xAxis: [
        {
          type: this.releaseBarXAxisDataType,
          data: this.releaseBarXData,
          axisTick: {
            alignWithLabel: true
          }
        }
      ],
      yAxis: [
        {
          type: this.releaseBarYAxisDataType,
        }
      ],
      series: [
        {
          name: this.releaseBarFont,
          type: 'bar',
          barWidth: this.releaseBarWidth,
          data: this.releaseBarYData,
        }
      ]
    };
    // });
  }

}
