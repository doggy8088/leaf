import {Component, OnInit} from '@angular/core';
import {PieModelDate} from './echarts-pie.model';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-echarts-pie',
  templateUrl: './echarts-pie.component.html',
  styleUrls: ['./echarts-pie.component.less']
})

export class EchartsPieComponent implements OnInit {
  tittle = '饼状图';
  validateForm: FormGroup;
  pieOrient;
  isVisible = false;
  public option;
  private dataLists = [];
  private _formatter = '{b} <br/>{a} : {c} ({d}%)';
  private _backgroundColor = 'rgba(50,50,50,0.7)';
  private _textColor = '#fff';
  private _textFontSize = 16;
  private _orient = 'vertical';
  private _legendDate = []; // 取值
  private _seriesName = '名称测试';
  private _seriesRadius = '80%';
  private _seriesCenter = '45%';
  private _seriesDate: PieModelDate[] = []; // 取值
  private colorList = [];
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

  // Url = '/devops/jenkins?dataType=jkChartTime&systemId=1&startDate=20180508&endDate=20180515';    // 必填
  // option;
  // _formatter = '{b} <br/>{a} : {c} ({d}%)';
  // _backgroundColor = 'rgba(50,50,50,0.7)';
  // _textColor = '#fff';
  // _textFontSize = 14;
  // _orient = 'vertical';
  // _legendDate = [];    // 取值
  // _seriesName = '456789978654';
  // _seriesRadius = ['55%', '80%'];
  // _seriesCenter = ['55%', '50%'];
  // _seriesDate: PieModelDate[] = [];    // 取值


  constructor(private fb: FormBuilder) {
    this.validateForm = this.fb.group({
      pieUrlName: [null],
      pieUrl: [null],
      pieDataLists: ['dataLists'],
      pieFormatter: ['{b} <br/>{a} : {c} ({d}%)'],
      pieFormatterBgColor: ['rgba(50,50,50,0.7)'],
      pieFormatterTextColor: ['#fff'],
      pieFormatterTextSize: [14],
      pieOrient: ['vertical'],
      pieSeriesName: [''],
      pieSeriesRadius: ['45%'],
      pieCenter: [['45%', '50%']],
    });
    this.validateForm.get('pieFormatter').valueChanges.subscribe(res => {
      this._formatter = res;
      this.getOptionDate();
    });
    this.validateForm.get('pieFormatterBgColor').valueChanges.subscribe(res => {
      this._backgroundColor = res;
      this.getOptionDate();
    });
    this.validateForm.get('pieFormatterTextColor').valueChanges.subscribe(res => {
      this._textColor = res;
      this.getOptionDate();
    });
    this.validateForm.get('pieFormatterTextSize').valueChanges.subscribe(res => {
      this._textFontSize = res;
      this.getOptionDate();
    });
    this.validateForm.get('pieOrient').valueChanges.subscribe(res => {
      this._orient = res;
      this.getOptionDate();
    });
    this.validateForm.get('pieSeriesName').valueChanges.subscribe(res => {
      this._seriesName = res;
      this.getOptionDate();
    });
    this.validateForm.get('pieSeriesRadius').valueChanges.subscribe(res => {
      this._seriesRadius = res;
      this.getOptionDate();
    });
    this.validateForm.get('pieCenter').valueChanges.subscribe(res => {
      this._seriesCenter = res;
      this.getOptionDate();
    });
  }

  ngOnInit() {
    this.getOptionDate();
  }

  // getOptionDate() {
  //   // this.http._get(this.Url).subscribe(res => {
  //   //   if (res) {
  //
  //   this._legendDate = ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'];
  //   const colorList = ['#FFCCCC', '#99CCCC', '#99CCFF', '#CCCCFF', '#9cc5b0'];
  //   const date = [
  //     {value: 335, name: '直接访问'},
  //     {value: 310, name: '邮件营销'},
  //     {value: 234, name: '联盟广告'},
  //     {value: 135, name: '视频广告'},
  //     {value: 1548, name: '搜索引擎'}
  //   ];
  //
  //   const _seriesDate = [];
  //   date.forEach(d => {
  //     const obj = {
  //       name: d.name,
  //       value: d.value,
  //       itemStyle: {
  //         normal: {
  //           color: '',
  //         }
  //       }
  //     };
  //     _seriesDate.push(obj);
  //   });
  //
  //   colorList.forEach((color, j) => {
  //     if (_seriesDate[j]) {
  //       _seriesDate[j].itemStyle.normal.color = colorList[j];
  //     }
  //   });
  //
  //   this._seriesDate = _seriesDate;
  //
  //   this.getOption();
  //   //   }
  //   // });
  // }
  //
  // getOption() {
  //   this.option = {
  //     tooltip: {    // 提示框浮层
  //       trigger: 'item',
  //       formatter: this._formatter,   // 提示框浮层内容格式器
  //       backgroundColor: this._backgroundColor,    // 提示框背景色
  //       textStyle: {
  //         color: this._textColor,            // 提示框内容字体颜色
  //         fontSize: this._textFontSize,             // 字体大小
  //       },
  //     },
  //     legend: {     // 图例
  //       orient: this._orient,    // 图例列表的布局朝向。
  //       left: 'left',          // 图例组件离容器左侧的距离。
  //       top: '10%',             // 图例组件离容器上面的距离。
  //       data: this._legendDate     // 图例数据
  //     },
  //     series: [
  //       {
  //         name: this._seriesName,    // 系列名称
  //         type: 'pie',               // 饼图
  //         radius: this._seriesRadius,     // 饼图的半径，数组的第一项是内半径，第二项是外半径
  //         center: this._seriesCenter,        // 饼图的中心（圆心）坐标
  //         data: this._seriesDate,            // 数据
  //         itemStyle: {
  //           emphasis: {
  //             shadowBlur: 10,
  //             shadowOffsetX: 0,
  //             shadowColor: 'rgba(0, 0, 0, 0.5)'
  //           }
  //         }
  //       }
  //     ]
  //   };
  //
  // }
  getOptionDate() {
    // this.http._get(this.Url).subscribe(res => {
    //   if (res) {
    //     res = this.pirUrl;
    this._legendDate = ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'];

    const date = [{value: 335, name: '直接访问'},
      {value: 310, name: '邮件营销'},
      {value: 234, name: '联盟广告'},
      {value: 135, name: '视频广告'},
      {value: 1548, name: '搜索引擎'}];
    const _seriesDate = [];
    date.forEach(d => {
      const obj = {
        name: d.name,
        value: d.value,
        itemStyle: {
          normal: {
            color: '',
          }
        }
      };
      _seriesDate.push(obj);
    });
    this.colorList.forEach((color, j) => {
      if (_seriesDate[j]) {
        _seriesDate[j].itemStyle.normal.color = this.colorList[j].color;
      }
    });
    this._seriesDate = _seriesDate;
    this.getOption();
    //   }
    // });
  }

  getOption() {
    this.option = {
      tooltip: { // 提示框浮层
        trigger: 'item',
        formatter: this._formatter, // 提示框浮层内容格式器
        backgroundColor: this._backgroundColor, // 提示框背景色
        textStyle: {
          color: this._textColor, // 提示框内容字体颜色
          fontSize: this._textFontSize, // 字体大小
        },
      },
      legend: {// 图例
        orient: this._orient, // 图例列表的布局朝向。
        left: 'left', // 图例组件离容器左侧的距离。
        top: '10%', // 图例组件离容器上面的距离。
        data: this._legendDate // 图例数据
      },
      series: [
        {
          name: this._seriesName, // 系列名称
          type: 'pie', // 饼图
          radius: this._seriesRadius, // 饼图的半径，数组的第一项是内半径，第二项是外半径
          center: this._seriesCenter, // 饼图的中心（圆心）坐标
          data: this._seriesDate, // 数据
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
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
    this.getOptionDate();
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
  }

}
