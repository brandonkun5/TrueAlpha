import { Restaurant } from './../../types/restaurant';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIService } from '../API.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'true-alpha';
  public createForm: FormGroup;

  constructor() { }

  async ngOnInit() {
    };
}
