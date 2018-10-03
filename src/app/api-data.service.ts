import { Injectable } from '@angular/core';
import { HttpClient } from '../../node_modules/@angular/common/http';
import { Observable } from '../../node_modules/rxjs';
import {IData} from './data';

@Injectable()
export class ApiDataService {

  //private _url = "http://demo2653115.mockable.io/api/files";
  private _url = "http://demo2038897.mockable.io/";
  constructor(private api: HttpClient) { }
  getData():Observable<IData[]>{
    return this.api.get<IData[]>(this._url);
  }

}
