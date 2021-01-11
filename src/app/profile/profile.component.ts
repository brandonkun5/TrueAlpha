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

  parseObject(obj) {
    for (var key in obj) { // iterating through the JSON object
      console.log("key: " + key + ", value: " + obj[key]) // console log the key, value pairs of the object
      if (obj[key] instanceof Object) {
        this.parseObject(obj[key])  
      } 
    }

    console.log("MY STOCK: " + obj["description"]);
  }

  constructor(private http: HttpClient) {

    const headers = { 
      'API-VERSION': '1.1', 
      'Content-Type': 'application/json', 
      'Authorization': 'Bearer t4FUf743gXq7Z34IDgYignUIFPk6'
    };

    http.get('https://development.api.yodlee.com/ysl/holdings?accountId=10297472&providerAccountId=10069444', {headers})
    .subscribe(response =>
       this.parseObject(response)
       )
  }

  ngOnInit(): void {
  }

}
