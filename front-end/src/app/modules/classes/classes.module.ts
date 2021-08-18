import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassesComponent } from './classes.component';
import { ClassesRoutingModule } from './classes-routing.module';
import { MaterialAngular } from 'src/app/shared/styles/material-angular.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ClassesComponent
  ],
  imports: [
    CommonModule,
    ClassesRoutingModule,
    MaterialAngular,
    HttpClientModule
  ],
})
export class ClassesModule { }
