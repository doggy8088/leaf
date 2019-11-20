import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router, RouterModule, Routes} from '@angular/router';
import {buildPath} from 'selenium-webdriver/http';

const mainRotes: Routes = [];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(mainRotes),
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}
