import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassesComponent } from './classes.component';
import { ClassesRoutingModule } from './classes-routing.module';
import { MaterialAngular } from 'src/app/shared/styles/material-angular.module';



@NgModule({
  declarations: [
    ClassesComponent
  ],
  imports: [
    CommonModule,
    ClassesRoutingModule,
    MaterialAngular
  ]
})
export class ClassesModule { }
