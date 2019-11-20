import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-echarts-line',
  templateUrl: './echarts-line.component.html',
  styleUrls: ['./echarts-line.component.less']
})
export class EchartsLineComponent implements OnInit {
  TimeLonOption;
  lineType;
  isShowArea;
  isShowstack;
  isVisible = false;
  tittle = '折线柱状混合图';
  validateForm: FormGroup;
  lineXAxisDataType;
  lineYAxisDataType;
  lineData = {
    name: ['待处理', '处理中', '已解决'],
    xData: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    data: [
      ['1', '2', '3', '1', '2', '3', '4'],
      ['1', '2', '3', '1', '2', '3', '6'],
      ['1', '2', '3', '1', '2', '3', '9'],
    ],
  };
  colorLists = [];
  colorLibrary = [
    {key: 0, color: '#13aa89', flag: false},
    {key: 1, color: '#28ade1', flag: false},
    {key: 2, color: '#ff9065', flag: false},
    {key: 3, color: '#f2c646', flag: false},
    {key: 4, color: '#2ee8bb', flag: false},
    {key: 5, color: '#f26d99', flag: false},
    {key: 6, color: '#FC7D7D', flag: false},
    {key: 7, color: '#bce9df', flag: false},
    {key: 8, color: '#ca967f', flag: false},
    {key: 9, color: '#CCCCFF', flag: false}
  ];
  // 线形图参数的各项配置
  legendData = [];
  legendTop = 0;  // 距离底部距离
  legendRight = 50; // 具离右边距离
  legendTextStyleColor = '#a7a7a7'; // 分类的字体颜色
  legendTextStyleFontSize = '12px'; // 分类的字体大小
  xAxisData = [];
  xAxissplitLineColor = '#a7a7a7'; // X轴线的颜色
  xAxisSplitLineShow = true; // 是否显示x轴线
  yAxisSplitLineColor = '#e6e6e6';
  yAxisSplitLineShow = true; // 是否显示X周线
  colorList = [];
  gridRight = '3%'; // 距离右边的距离
  gridTop = '20%'; // 距离上边的距离
  series = []; // 真实的数据
  seriesSmooth = true; // 线条光滑
  seriesLineStyleWidth = 2; // 线宽
  constructor(private fb: FormBuilder) {
    this.validateForm = this.fb.group({
      lineUrl: [null],
      lineUrlName: [null],
      lineLegendTop: [0],
      lineLegendRight: [50],
      lineLegendTextStyleColor: ['#a7a7a7'],
      lineLegendTextStyleFontSize: ['12px'],
      lineXAxisDataType: ['category'],
      lineXAxissplitLineColor: ['#a7a7a7'],
      lineYAxisDataType: ['value'],
      lineYAxissplitLineColor: ['12px'],
      lineGridRight: ['3%'],
      lineGridTop: ['20%'],
      lineDataAdd: [null],
      lineChooseLineType: [null],
      lineArea: [0],
      lineWidth: [null],
    });
    this.validateForm.get('lineChooseLineType').valueChanges.subscribe(res => {
      if (res === '0') {
        this.seriesSmooth = false;
      } else {
        this.seriesSmooth = true;
      }
    });
    this.validateForm.get('lineArea').valueChanges.subscribe(res => {
      if (res === '0') {
        this.isShowArea = true;
      } else {
        this.isShowArea = false;
      }
    });
    this.validateForm.get('lineDataAdd').valueChanges.subscribe(res => {
      if (res === '0') {
        this.isShowstack = true;
      } else {
        this.isShowstack = false;
      }
    });
  }

  ngOnInit() {
    this.setSeriesColor();
    this.setSeries();
    this.getTimeLonOption();
  }

  setSeriesColor() {
    // this.httpservice._get(this.url).subscribe(res => {
    //     if (res) {
    //       this.lineData = res;
    this.legendData = this.lineData.name;
    this.xAxisData = this.lineData.xData;
    const dValue = (this.lineData.name.length - this.colorList.length);
    for (let i = 0; i < dValue; i++) {
      if ((this.lineData.name.length - this.colorList.length) >= 0) {
        this.colorList.push('');
      }
    }
    this.series.forEach((opt, i) => {
      opt.lineStyle.normal.color = this.colorList[i].color;
      opt.itemStyle.normal.color = this.colorList[i].color;
      opt.areaStyle.normal.color = this.colorList[i].color;
    });
    this.getTimeLonOption();
    // }
    //   }
    // );
  }

  setSeries() {
    this.lineData.name.forEach((opt, i) => {
      const seriesObj = {
        name: opt,
        type: 'line',
        smooth: this.seriesSmooth,
        data: this.lineData.data[i],
        lineStyle: {
          normal: {
            color: this.colorList[i].color,
            width: this.seriesLineStyleWidth,
          },
        },
        itemStyle: {
          normal: {
            color: this.colorList[i].color,
          },
        },
        areaStyle: {
          normal: {
            color: this.colorList[i].color,
            opacity: 0.6,
          },
        },
      };
      this.series.push(seriesObj);
    });
  }

  getTimeLonOption(): void {
    this.TimeLonOption = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        data: this.legendData,
        top: this.legendTop,
        right: this.legendRight,
        textStyle: {
          color: this.legendTextStyleColor,
          fontSize: this.legendTextStyleFontSize,
        },
      },
      grid: { // 图示距离父组件的位置
        top: this.gridTop,
        right: this.gridRight,
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: this.xAxisData,
          axisLine: {
            show: true,
            onZero: true,
            lineStyle: {
              color: '#a7a7a7',
              width: 1,
              type: 'solid',
            },
          },
          splitLine: {
            show: this.xAxisSplitLineShow,
            interval: 'auto',
            lineStyle: {
              color: this.xAxissplitLineColor,             // ['#e6e6e6']
              width: 1,
              type: 'solid',
              // opacity: '0'
            },
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          axisLine: {
            show: true,
            onZero: true,
            lineStyle: {
              color: '#a7a7a7',
              width: 1,
              type: 'solid',
            },
          },
          axisLabel: {
            formatter: '{value}',
          },
          splitLine: {
            show: this.yAxisSplitLineShow,
            interval: 'auto',
            lineStyle: {
              color: this.yAxisSplitLineColor,    // ['#e6e6e6'],
              width: 1,
              type: 'solid',
              //  opacity: '0.1'
            },
          }
        }
      ],
      series: this.series,
    };
  }

  handClick() {
    this.isVisible = true;
  }

  handleModalCancel() {
    this.isVisible = false;
  }

  handleModalOk() {
    this.colorList = this.colorLists;
    this.isVisible = false;
    this.setSeriesColor();
  }

  chooseColor(item) {
    if (item.flag === false) {
      item.flag = true;
      this.colorLists.push(item);
    } else {
      item.flag = false;
      this.colorLists.forEach((opt, j) => {
        if (opt.key === item.key) {
          this.colorLists.splice(j, 1);
        }
      });
    }
    // console.log(this.colorLists);
  }
}
