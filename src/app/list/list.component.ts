import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
    names = [
    'Peter Falk', 'Mary-Ann Blige', 'Eminem'];
    folders: any[] = [
      {
       "folderName" : "test1.jpg",
       "image": "../assets/images/1.jpg",
       "owner" : "Raaz.jpg",
       "Date" : "25/1/2018",
       "Size" : "335 MB",
       "Action" : "",
      },
      {
       "folderName" : "test2.jpg",
       "image": "../assets/images/1.jpg",
       "owner" : "Akash.jpg",
       "Date" : "25/1/2018",
       "Size" : "335 MB",
       "Action" : "",
      },
      {
       "folderName" : "test3.jpg",
       "owner" : "Bashid",
       "image": "../assets/images/1.jpg",
       "Date" : "25/1/2018",
       "Size" : "335 MB",
       "Action" : "",
      },
      {
       "folderName" : "test4.jpg",
       "image": "../assets/images/1.jpg",
       "owner" : "Asif",
       "Date" : "25/1/2018",
       "Size" : "335 MB",
       "Action" : "",
      }
     ];
  constructor() { }

  ngOnInit() {
  }

}
