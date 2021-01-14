import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIService } from './API.service';
import { Restaurant } from '../types/restaurant';
import { onAuthUIStateChange, CognitoUserInterface, AuthState } from '@aws-amplify/ui-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'amplify-angular-auth';
  user: CognitoUserInterface | undefined;
  authState: AuthState;

  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit() {
    onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.user = authData as CognitoUserInterface;
      this.ref.detectChanges();
    })
  }

  ngOnDestroy() {
    return onAuthUIStateChange;
  }
}

