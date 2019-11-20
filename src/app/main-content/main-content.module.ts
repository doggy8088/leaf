import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputComponent} from './input/input.component';
import {UploadComponent} from './upload/upload.component';
import {RouterModule, Routes} from '@angular/router';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TableComponent} from './table/table.component';
import {SelectComponent} from './select/select.component';
import {BreadcrumbComponent} from './breadcrumb/breadcrumb.component';
import {EchartsLineComponent} from './echarts-line/echarts-line.component';
import {EchartsPieComponent} from './echarts-pie/echarts-pie.component';
import {NgxEchartsModule} from 'ngx-echarts';
import {EchartsFixLineBarComponent} from './echarts-fix-line-bar/echarts-fix-line-bar.component';
import {EchartsBarComponent} from './echarts-bar/echarts-bar.component';
import {EchartReleaseBarComponent} from './echart-release-bar/echart-release-bar.component';
import {CodeRuleComponent} from './code-rule/code-rule.component';
import {BarComponent} from './bar/bar.component';
import {DatepickerComponent} from './datepicker/datepicker.component';
import {HttpModule} from '@angular/http';
import {AppVersionControlComponent} from './app-version-control/app-version-control.component';
import {CascaderComponent} from './cascader/cascader.component';
import {ButtonComponent} from './button/button.component';
import {ModalComponent} from './modal/modal.component';

const mianContentRoute: Routes = [
  {
    path: '',
    component: AppVersionControlComponent,
  },
  {
    path: 'input',
    component: InputComponent
  },
  {
    path: 'upload',
    component: UploadComponent
  },
  {
    path: 'table',
    component: TableComponent
  },
  {
    path: 'select',
    component: SelectComponent
  },
  {
    path: 'breadcurmb',
    component: BreadcrumbComponent
  },
  {
    path: 'echarts-line',
    component: EchartsLineComponent,
  },
  {
    path: 'echarts-pie',
    component: EchartsPieComponent,
  },
  {
    path: 'echarts-fix-line-bar',
    component: EchartsFixLineBarComponent,
  },
  {
    path: 'echarts-bar',
    component: EchartsBarComponent,
  },
  {
    path: 'echarts-release-bar',
    component: EchartReleaseBarComponent,
  },
  {
    path: 'codeRule',
    component: CodeRuleComponent,
  },
  {
    path: 'bar',
    component: BarComponent
  },
  {
    path: 'datepicker',
    component: DatepickerComponent
  },
  {
    path: 'leaf',
    component: AppVersionControlComponent
  },
  {
    path: 'cascader',
    component: CascaderComponent
  },
  {
    path: 'button',
    component: ButtonComponent
  },
  {
    path: 'modal',
    component: ModalComponent,
  },

];

@NgModule({
  imports: [
    HttpModule,
    NgxEchartsModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroAntdModule,
    RouterModule.forRoot(mianContentRoute),
    CommonModule
  ],
  exports: [RouterModule],
  declarations: [
    InputComponent,
    UploadComponent,
    TableComponent,
    SelectComponent,
    BreadcrumbComponent,
    EchartsLineComponent,
    EchartsPieComponent,
    EchartsFixLineBarComponent,
    EchartsBarComponent,
    EchartReleaseBarComponent,
    CodeRuleComponent,
    BarComponent,
    DatepickerComponent,
    AppVersionControlComponent,
    CascaderComponent,
    ButtonComponent,
    ModalComponent,
  ]
})
export class MainContentModule {
}
