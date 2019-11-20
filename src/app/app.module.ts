import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {MainContentComponent} from './main-content/main-content.component';
import {MainHeaderComponent} from './main-header/main-header.component';
import {MainSiderComponent} from './main-sider/main-sider.component';
import {MainContentModule} from './main-content/main-content.module';
import {NgxEchartsModule} from 'ngx-echarts';
import {DragulaModule} from 'ng2-dragula';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    MainContentComponent,
    MainHeaderComponent,
    MainSiderComponent,
  ],
  imports: [
    HttpModule,
    DragulaModule,
    NgxEchartsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    AppRoutingModule,
    MainContentModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
