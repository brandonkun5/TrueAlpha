import { Stock } from './../../types/stock';
import { HttpClient, HttpClientModule, HttpHeaders, HttpParams, HttpClientJsonpModule } from '@angular/common/http';
import { Component, OnInit, Injectable } from '@angular/core';
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators"; 

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  stocks: any = [];

  constructor(private http: HttpClient) {

    const headers = { 
      'API-VERSION': '1.1', 
      'Content-Type': 'application/json', 
      'Authorization': 'Bearer 5BAUcmmHUG4veKewj7xvp7FklUpg'
    };

    http.get('https://development.api.yodlee.com/ysl/holdings?accountId=10297472&providerAccountId=10069444', {headers})
    .subscribe(response =>
       this.stocks = response
       )
  }

  ngOnInit(): void {
  }

}
