import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-sider',
  templateUrl: './main-sider.component.html',
  styleUrls: ['./main-sider.component.css']
})
export class MainSiderComponent implements OnInit {
  componentLists = [
    {
      name: '概览', components: [
        {name: 'Leaf', routerName: 'leaf'},
        {name: '规范守则', routerName: 'codeRule'},
      ]
    },
    {
      name: '常用组件', components: [
        {name: '按钮', routerName: 'button'},
      ]
    },
    {
      name: '数据输入', components: [
        {name: '输入框', routerName: 'input'},
        {name: '上传', routerName: 'upload'},
        {name: '级联选择', routerName: 'cascader'}
      ]
    },
    {
      name: '数据显示', components: [
        {name: '面包屑', routerName: 'breadcurmb'},
        {name: '表格', routerName: 'table'},
        {name: '选择器', routerName: 'select'},
        {name: '日期选择框', routerName: 'datepicker'}
      ]
    },
    {
      name: '各种图', components: [
        {name: '线线图', routerName: 'echarts-line'},
        {name: '饼状图', routerName: 'echarts-pie'},
        {name: '折线柱状混合图', routerName: 'echarts-fix-line-bar'},
        {name: '柱状图', routerName: 'echarts-bar'},
        {name: '纵向柱状图', routerName: 'echarts-release-bar'},
        {name: '横向柱状图', routerName: 'bar'},
      ]
    },
    {
      name: '反馈', components: [
        {name: '弹出框', routerName: 'modal'},
      ]
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
