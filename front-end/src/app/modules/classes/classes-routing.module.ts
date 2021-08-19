import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ClassesComponent } from './classes.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'FIC COURSE - CLASSES'
    },
    component: ClassesComponent,
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ClassesRoutingModule { }
