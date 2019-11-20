import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {TableService} from "./table.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less'],
  providers: [TableService],
})
export class TableComponent implements OnInit {
  public tittle = '表格';
  public validateForm: FormGroup;
  public tableCheckBoxs = '1';
  public tableSearchInput = '1';
  public tableShowPageInfo = '0';
  public tittleList = [];
  public tittleParam = [];
  public tableActionLittle = [];
  public tableActionFunctionName = [];
  public tableShowHyperLink;
  // TH 选项
  public schema = [];
  public actionTittleName = '操作';
  public actions = [];

  // 检查框选型
  public _allChecked = false;    // 是否全选
  public _indeterminate = false;      // 至少有一个选项
  public selectBtn = false;
  public _disabledButton = true;
  public searchDisabled = false;

  public showPageInfo = true;
  public pageSize: number;
  public current = 1;
  public loadingTable = false;
  public _nzCustomNoResult = true;
  public total: number;
  public searchParams: string;
  public searchSubject;


  public url = ``;
  public param: string;
  public sortName = null;
  public sortValue = null;
  dataSrcs = [
    {
      pipelineName: '演示流水线0',
      creatorUserAccount: 'admin',
      pipelinestageNames: '节点0',
      checked: false,
    },
    {
      pipelineName: '演示流水线1',
      creatorUserAccount: 'admin',
      pipelinestageNames: '节点1',
      checked: false,
    }, {
      pipelineName: '演示流水线2',
      creatorUserAccount: 'admin',
      pipelinestageNames: '节点2',
      checked: false,
    }, {
      pipelineName: '演示流水线3',
      creatorUserAccount: 'admin',
      pipelinestageNames: '节点3',
      checked: false,
    }, {
      pipelineName: '演示流水线3',
      creatorUserAccount: 'admin',
      pipelinestageNames: '节点3',
      checked: false,
    }, {
      pipelineName: '演示流水线4',
      creatorUserAccount: 'admin',
      pipelinestageNames: '节点4',
      checked: false,
    }, {
      pipelineName: '演示流水线5',
      creatorUserAccount: 'admin',
      pipelinestageNames: '节点5',
      checked: false,
    }, {
      pipelineName: '演示流水线6',
      creatorUserAccount: 'admin',
      pipelinestageNames: '节点6',
      checked: false,
    }, {
      pipelineName: '演示流水线7',
      creatorUserAccount: 'admin',
      pipelinestageNames: '节点7',
      checked: false,
    }, {
      pipelineName: '演示流水线8',
      creatorUserAccount: 'admin',
      pipelinestageNames: '节点8',
      checked: false,
    }, {
      pipelineName: '演示流水线9',
      creatorUserAccount: 'admin',
      pipelinestageNames: '节点9',
      checked: false,
    },];

  constructor(
    private tableService: TableService,
    private fb: FormBuilder) {
    this.validateForm = this.fb.group({
      tableUrlName: [null],
      tableUrl: [null],
      tableDataList: ['dataSrcs'],
      tableTittleLists: ['schema'],
      tableSearchInput: ['1'],
      tableCheckBoxs: ['1'],
      tableShowPageInfo: ['0'],
      tableCheckBoxName: ['按钮'],
      tableInputSearchPlaceHolder: ['请输入：'],
      tableSchemaTittleInfo: [null],
      tableSchemaParamInfo: [null],
      tableShowHyperLink: [null],
      tableHyperLinkFunction: [null],
      tableActionTittle: [null],
      tableActionFuntion: [null],
    });
    this.validateForm.get('tableCheckBoxs').valueChanges.subscribe(res => {
      if (res === '0') {
        this.selectBtn = true;
      } else {
        this.selectBtn = false;
      }
    });
    this.validateForm.get('tableSearchInput').valueChanges.subscribe(res => {
      if (res === '0') {
        this.searchDisabled = true;
      } else {
        this.searchDisabled = false;
      }
    });
    this.validateForm.get('tableShowPageInfo').valueChanges.subscribe(res => {
      if (res === '0') {
        this.showPageInfo = true;
      } else {
        this.showPageInfo = false;
      }
    });
    this.validateForm.get('tableSchemaTittleInfo').valueChanges.subscribe(res => {
      let schemaTittle = res.toString();
      this.tittleList = schemaTittle.split('|');
      this.schema = [];
      this.tittleList.forEach(opt => {
        let tittleObj = {
          name: opt,
        };
        this.schema.push(tittleObj);
      });
    });
    this.validateForm.get('tableSchemaParamInfo').valueChanges.subscribe(res => {
      let schemaParam = res.toString();
      this.tittleParam = schemaParam.split('|');
    });
    this.validateForm.get('tableActionTittle').valueChanges.subscribe(res => {
      let actionTittle = res.toString();
      this.tableActionLittle = actionTittle.split('|');
      this.actions = [];
      this.actions = this.tableActionLittle;
    });
    this.validateForm.get('tableActionFuntion').valueChanges.subscribe(res => {
      let actionFunctionName = res.toString();
      this.tableActionFunctionName = actionFunctionName.split('|');

    })


  }

  ngOnInit() {
    this.pageSize = 10;
    this.total = this.dataSrcs.length;
    this.setSchema();
    this.setActions();
  }

  sort(sortName, value) {
    this.sortName = sortName;
    this.sortValue = value;
    this.Search();
  }

  Search() {
    this.dataSrcs = [...this.dataSrcs.sort((a, b) => {
      if (a[this.sortName] > b[this.sortName]) {
        return (this.sortValue === 'ascend') ? 1 : -1;
      } else if (a[this.sortName] < b[this.sortName]) {
        return (this.sortValue === 'ascend') ? -1 : 1;
      } else {
        return 0;
      }
    })];
  }

  search(term: string): void {
    term = term || '';
    this.tableService.searchEvent.next(term);
    this.searchSubject = this.tableService.searchEvent
      .debounceTime(300)
      .distinctUntilChanged()
      .subscribe(
        params => {
          if (params.constructor.name === 'Boolean') {
            this.refreshData();
          } else {
            this.searchParams = params;
            this.refreshData(true);
          }
        }
      );
  }

  setActions() {
    this.actions = ['增加', '删除', '编辑',]
  }

  getAction(opt) {
    this.actions.forEach(act => {
      if (act.action === opt) {
        console.log('=');
        return opt;
      }

    })

  }


  setSchema() {
    this.schema = [
      {
        key: 'pipelineName',
        name: '流水线名称'
      },
      {
        key: 'creatorUserAccount',
        name: '创建人'
      },
      {
        key: 'pipelinestageNames',
        name: '节点'
      },
    ]
  }

  _checkAll(value) {     //多选框的全选
    if (value) {
      this.dataSrcs.forEach(data => data.checked = true);
    } else {
      this.dataSrcs.forEach(data => data.checked = false);
    }
    this._refreshStatus();
  }

  delect() {

  }

  _refreshStatus() {    //多选框的可选
    if (this.dataSrcs.length > 0) {
      const allChecked = this.dataSrcs.every(value => value.checked === true);
      const allUnChecked = this.dataSrcs.every(value => !value.checked);
      this._allChecked = allChecked;
      this._indeterminate = (!allChecked) && (!allUnChecked);
      this._disabledButton = !this.dataSrcs.some(value => value.checked);
    }
  }


  refreshData(reset = false): void {      //当前页码变化回调
    // 每页数量变化回调     reset=true
    if (reset) {
      this.current = 1;
    }
    // this.loadingTable = true;
    this._nzCustomNoResult = true;
    const pageInfo = {
      curpage: this.current,
      pagesize: this.pageSize,
      searchParams: this.searchParams
    };
    this.tableService.setPageInfo(pageInfo);
    if (this.url) {
      this.tableService._getDatas(this.url, pageInfo)
        .subscribe(respose => {
          if (respose) {
            // this.loadingTable = false;
            this._nzCustomNoResult = false;
            this.total = respose.result.totalcount;
            this.dataSrcs = respose.result.resultlist;
          }
        });
    }
  }
}
