import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-echarts-fix-line-bar',
  templateUrl: './echarts-fix-line-bar.component.html',
  styleUrls: ['./echarts-fix-line-bar.component.less']
})
export class EchartsFixLineBarComponent implements OnInit {
  tittle = '折线柱状混合图';
  validateForm: FormGroup;

  optionBarFixLine; // 柱状图参数的各项配置
  barFixLinePointerColor = 'yellow';     // 提示框坐标轴指示器线的颜色
  barFixLineLegend = ['失败次数', '构建次数'];    // 图例值
  barFixLineOrient = 'horizontal';       // 图例列表的布局朝向
  barFixLineXName = '日期';  // X轴显示的Tittle
  barFixLineYName = '构建次数';
  barFixLineLegendRight = '2%';
  barFixLineLegendTop = '2%';
  barFixLineXAxisDataType = 'category';
  barFixLineYAxisDataType = 'value';
  barFixLineXData = ['05-10', '05-11', '05-12', '05-13', '05-14', '05-15', '05-16']; // X轴数据

  constructor(private fb: FormBuilder) {
    this.validateForm = this.fb.group({
      barFixLineUrlName: [null],  // URLName
      barFixLineUrl: [null],  // URL
      barFixLineOrient: [null],
      barFixLineXName: [null],
      barFixLineYName: [null],
      barFixLineXAxisDataType: [null],
      barFixLineYAxisDataType: [null],
      barFixLineRight: [null],
      barFixLineTop: [null],
      barFixLinePointerColor: [null],
    });
    this.validateForm.get('barFixLineOrient').valueChanges.subscribe(res => {
      this.barFixLineOrient = res;
      this.getbarFixLineOption();
    });
    this.validateForm.get('barFixLineXName').valueChanges.subscribe(res => {
      this.barFixLineXName = res;
      this.getbarFixLineOption();
    });
    this.validateForm.get('barFixLineYName').valueChanges.subscribe(res => {
      this.barFixLineYName = res;
      this.getbarFixLineOption();
    });
    this.validateForm.get('barFixLineXAxisDataType').valueChanges.subscribe(res => {
      this.barFixLineXAxisDataType = res;
      this.getbarFixLineOption();
    });
    this.validateForm.get('barFixLineYAxisDataType').valueChanges.subscribe(res => {
      this.barFixLineYAxisDataType = res;
      this.getbarFixLineOption();
    });
    this.validateForm.get('barFixLineRight').valueChanges.subscribe(res => {
      this.barFixLineLegendRight = res;
      this.getbarFixLineOption();
    });
    this.validateForm.get('barFixLineTop').valueChanges.subscribe(res => {
      this.barFixLineLegendTop = res;
      this.getbarFixLineOption();
    });
    this.validateForm.get('barFixLinePointerColor').valueChanges.subscribe(res => {
      this.barFixLinePointerColor = res;
      this.getbarFixLineOption();
    });
  }

  ngOnInit() {
    this.getbarFixLineOption();
  }

  getbarFixLineOption() {
    // this.httpService._get(this.xxx).subscribe(res=>{
    //   res.Xdata=this.barFixLIneXData;
    //   res=this.optionBarFixLine.series;
    this.optionBarFixLine = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: this.barFixLinePointerColor
          }
        }
      },
      legend: {
        data: this.barFixLineLegend,
        right: this.barFixLineLegendRight,
        top: this.barFixLineLegendTop,
        orient: this.barFixLineOrient
      },
      xAxis: [
        {
          name: this.barFixLineXName,
          type: this.barFixLineXAxisDataType,
          data: this.barFixLineXData,
          axisPointer: {
            type: 'shadow'
          }
        }
      ],
      yAxis: [
        {
          type: this.barFixLineYAxisDataType,  //
          name: this.barFixLineYName,  //
        }
      ],
      series: [
        {
          name: '失败次数', //
          type: 'bar', //
          data: [2, 4, 1, 3, -2, 2, 1]
        },

        {
          name: '构建次数', //
          type: 'line', //
          data: [2, 5, 3, 6, 3, 5, 7]
        }
      ]
    };
    // })

  }


}
