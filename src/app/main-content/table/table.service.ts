import {Injectable} from '@angular/core';
import {EventEmitter} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from 'rxjs/Rx';
import {NzNotificationService} from 'ng-zorro-antd';

@Injectable()
export class TableService {
  searchEvent: EventEmitter<any> = new EventEmitter(true);
  private pageInfos: { curpage: number, pagesize: number, sortfield: string, sortorder: string, searchParams: string, roleType: number };
  private preUrl: string;

  constructor(private http: Http, private _notification: NzNotificationService) {
  }


  _getDatas(url, pageInfo) {
    const params = new URLSearchParams();
    const pageInfoKey = ['curpage', 'pagesize', 'sortfield', 'sortorder'];
    if (!pageInfo.sortorder) {
      pageInfo.sortfield = undefined;
    }
    pageInfoKey.forEach(opt => {
      if (pageInfo[opt]) {
        params.append(opt, `${pageInfo[opt]}`);
      }
    });

    if (pageInfo.searchParams) {
      params.append('parameter', `${pageInfo.searchParams}`);
    }

    return this.http.get(`${url}`, {params: params})
      .map((res: Response) => {
        if (res.json().code === '0000') {
          const result = res.json();
          return result;
        } else {
          this.createNotification('error', res.json().message);
          return null;
        }
      })
      .catch((error: any) => Observable.throw(error || '错误'));
  }

  private createNotification = (type, message) => {
    if (type === 'error') {
      this._notification.error('失败', message);
    } else {
      this._notification.success('成功', message);
    }
  }

  setPageInfo(opt) {
    this.pageInfos = opt;
  }

  getPageInfo() {
    return this.pageInfos;
  }

  setUrl(url) {
    this.preUrl = url;
  }

  getUrl() {
    return this.preUrl;
  }
}
