import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Headers} from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {ProfileComponent} from './components/profile.component';
import {GithubService} from './services/github.service';

@NgModule({
  declarations: [
    AppComponent, ProfileComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
