import { HttpClient, HttpClientModule, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit, Injectable } from '@angular/core';
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent{

  constructor() { }

  ngOnInit(): void {
  }

}
