import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.less']
})
export class BarComponent implements OnInit {
  tittle = '横向柱状图';
  validateForm: FormGroup;
  isVisible = false;

  public option;
  private _gridLeft = '3%';
  private _gridBottom = '3%';
  public _xAxisType = 'value';
  public _yAxisType = 'category';
  public _seriesType = 'bar';
  public _legendData = ['2011年', '2012年'];
  public _seriesDate = [];
  public _yAxisData = ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)'];

  constructor(private fb: FormBuilder) {
    this.validateForm = this.fb.group({
      barUrlName: [null],
      barUrl: [null],
      gridLeft: ['3%'],
      gridBottom: ['3%'],
      yAxisType: 'category',
      xAxisType: 'value',
      seriesType: 'bar',
      legendData: [null],
    });
    this.validateForm.get('gridLeft').valueChanges.subscribe(res => {
      this._gridLeft = res;
      this.getOptionDate();
    });
    this.validateForm.get('gridBottom').valueChanges.subscribe(res => {
      this._gridBottom = res;
      this.getOptionDate();
    });
    this.validateForm.get('xAxisType').valueChanges.subscribe(res => {
      this._xAxisType = res;
      this.getOptionDate();
    });
    this.validateForm.get('yAxisType').valueChanges.subscribe(res => {
      this._yAxisType = res;
      this.getOptionDate();
    });
    this.validateForm.get('seriesType').valueChanges.subscribe(res => {
      this._seriesType = res;
      this.getOptionDate();
    });
  }

  ngOnInit() {
    this.getOptionDate();
  }

  getOptionDate() {
    this._seriesDate = [];
    const date = [
      {
        name: '2011年', type: this._seriesType, data: [18203, 23489, 29034, 104970, 131744, 630230]
      },
      {name: '2012年', type: this._seriesType, data: [19325, 23438, 31000, 121594, 134141, 681807]}
    ];
    date.forEach(d => {
      const obj = {
        name: d.name,
        data: d.data,
        type: d.type,
      };
      this._seriesDate.push(obj);
    });
    this.getOption();
  }

  getOption(): void {
    this.option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        data: this._legendData
      },
      grid: {
        left: this._gridLeft,
        right: '4%',
        bottom: this._gridBottom,
        containLabel: true
      },
      xAxis: {
        type: this._xAxisType,
        boundaryGap: [0, 0.01],
      },
      yAxis: {
        type: this._yAxisType,
        data: this._yAxisData
      },
      series: this._seriesDate
    };
  }

  handClick() {
    this.isVisible = true;
  }
}

