import { Stock } from './../../types/stock';
import { HttpClient, HttpClientModule, HttpHeaders, HttpParams, HttpClientJsonpModule } from '@angular/common/http';
import { Component, OnInit, Injectable } from '@angular/core';
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators"; 
import { formatPercent, PercentPipe } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  stocks: any = [];

  parseObject(obj) {
    for (var key in obj) { // iterating through the JSON object
      return obj[key] // console log the key, value pairs of the object
      if (obj[key] instanceof Object) {
        this.parseObject(obj[key])  
      } 
    } 
  }

  constructor(private http: HttpClient) {

    const headers = { 
      'API-VERSION': '1.1', 
      'Content-Type': 'application/json', 
      'Authorization': 'Bearer FDeP82JThZYa5CX0nGkdeGxuYs5B'
    };

    http.get('https://development.api.yodlee.com/ysl/holdings?accountId=10297472&providerAccountId=10069444', {headers})
    .subscribe(response =>
       this.stocks = this.parseObject(response)
       )
  }

  ngOnInit(): void {
  }
}