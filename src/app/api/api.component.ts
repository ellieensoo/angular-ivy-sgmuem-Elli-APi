import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  constructor(public http:HttpClient) { 
  }

  ngOnInit() {
    this.http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=viljandi&key=AIzaSyBgXrGjf1QNEWJpcYJvtBBc2GNRzNpos34').subscribe((res)=>{
      console.log(res);
    })
  }

}
