import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialAngular } from 'src/app/shared/styles/material-angular.module';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialAngular
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
