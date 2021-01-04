import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeprofileComponent } from './homeprofile/homeprofile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FeedComponent } from './feed/feed.component';
import { HomeleaderboardComponent } from './homeleaderboard/homeleaderboard.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { GroupsComponent } from './groups/groups.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeprofileComponent,
    NavbarComponent,
    FeedComponent,
    HomeleaderboardComponent,
    LeaderboardComponent,
    GroupsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
