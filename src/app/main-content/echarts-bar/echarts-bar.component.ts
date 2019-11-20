import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-echarts-bar',
  templateUrl: './echarts-bar.component.html',
  styleUrls: ['./echarts-bar.component.less']
})
export class EchartsBarComponent implements OnInit {
  tittle = '柱状图';
  validateForm: FormGroup;
  option_bar: any;
  barTittle = '世界人口总量'; // 标题
  legendData = ['2011年', '2012年'];
  gridLeft = '3%';
  gridBottom = '3%';
  barXAxisDataType = 'value';  // 展示的数据类型
  barYAxisDataType = 'category';  //  category 或者 value
  yAxisData = ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)'];
  seriesName = '2011年';
  seriesType = 'bar';  // line 或者 bar  是线状还是柱状
  seriesData = [18203, 23489, 29034, 104970, 131744, 630230];
  seriesItemStyleColor = '#CCC';
  seriesItemStyleOpacity = .5;
  barDataFrom = '数据来源于网络';

  constructor(private fb: FormBuilder) {
    this.validateForm = this.fb.group({
      barUrlName: [null],
      barUrl: [null],
      barTittle: [null],
      barDataFrom: [null],
      barGridLeft: [null],
      barGridBottom: [null],
      barXAxisDataType: [null],
      barYAxisDataType: [null],
      barSeriesColor: [null],
      barSeriesOpacity: [null],
    })
    ;
  }

  ngOnInit() {
    this.getOptions();
  }

  getOptions(): void {
    this.option_bar = {
      title: {
        text: this.barTittle,
        subtext: this.barDataFrom,
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        data: this.legendData
      },
      grid: {
        left: this.gridLeft,
        right: '4%',
        bottom: this.gridBottom,
        containLabel: true
      },
      xAxis: {
        type: this.barXAxisDataType,
        boundaryGap: [0, 0.01]
      },
      yAxis: {
        type: this.barYAxisDataType,
        data: this.yAxisData
      },
      series: [
        {
          name: this.seriesName,
          type: this.seriesType,
          data: this.seriesData,
          itemStyle: {
            normal: {
              color: this.seriesItemStyleColor,
              opacity: this.seriesItemStyleOpacity
            },
          }
        },
      ]
    };
  }

}
