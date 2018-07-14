import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

import { FormsModule} from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService} from './hero.service';
import { MessagesComponent } from './messages/messages.component';
import {MessageService} from './message.service';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {InMemoryDataService} from './in-memory-data.service';
import {LonginServiceService} from './LoginService/longin-service.service';
import {HttpClientModule} from '@angular/common/http';
import {ConfigService} from './services/config.service';
import { ConfigComponent } from './config/config.component';
import {HeroesService} from './heroes/heroes.service';
import { TestComponent } from './test/test.component';
import { LoginComponent } from './login/login.component';
import { KeyupComponent } from './keyup/keyup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    ConfigComponent,
    TestComponent,
    LoginComponent,
    KeyupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    HeroService,
    MessageService,
    InMemoryDataService,
    LonginServiceService,
    ConfigService,
    HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
