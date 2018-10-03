import { Component ,OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'File-Managment';
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

  ngOnInit() {
    
  // $('button').click(function (){ 
  //   alert('hi');
  //  });
    document.getElementById('buttonid').addEventListener('click', openDialog);

      function openDialog() {
        document.getElementById('fileid').click();
      }
  }
  
  

  

}

