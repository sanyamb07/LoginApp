import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './routing.module';
import { LoginComponent } from './login/login.component';
import { ProfComponent } from './prof.component';
import {ReactiveFormsModule} from '@angular/forms';
import { AsyncLocalStorageModule } from 'angular-async-local-storage';
import { HttpModule } from '@angular/http';
import {AuthService} from './auth.service';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule,
    AsyncLocalStorageModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
