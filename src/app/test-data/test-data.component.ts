import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../api-data.service';

@Component({
  selector: 'app-test-data',
  templateUrl: './test-data.component.html',
  styleUrls: ['./test-data.component.css']
})
export class TestDataComponent implements OnInit {
  public Data =[];
  constructor(private _apiDataService: ApiDataService) { }

  ngOnInit() {
    this._apiDataService.getData()
      .subscribe(data => this.Data = data);
  }

}
