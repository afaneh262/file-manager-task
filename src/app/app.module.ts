import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { DataTablesModule } from 'angular-datatables';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ProgressComponent } from './progress/progress.component';
import {ApiDataService} from './api-data.service';
import {HttpClientModule} from '@angular/common/http';
import { TestDataComponent } from './test-data/test-data.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ListItemComponent,
    ProgressComponent,
    TestDataComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [ApiDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
