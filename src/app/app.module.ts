import { Amplify } from 'aws-amplify';
import { HttpClientJsonpModule, HttpClientModule } from "@angular/common/http";
import { LoginComponent } from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedComponent } from './feed/feed.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GroupsComponent } from './groups/groups.component';
import { HomeleaderboardComponent } from './homeleaderboard/homeleaderboard.component';
import { HomeprofileComponent } from './homeprofile/homeprofile.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeprofileComponent,
    NavbarComponent,
    FeedComponent,
    HomeleaderboardComponent,
    LeaderboardComponent,
    GroupsComponent,
    HomeComponent,
    ProfileComponent,
    LoginComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HttpClientJsonpModule,
    AmplifyUIAngularModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'leaderboard', component: LeaderboardComponent},
      {path: 'login', component: LoginComponent},
      {path: 'groups', component: GroupsComponent},
      {path: 'profile', component: ProfileComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
