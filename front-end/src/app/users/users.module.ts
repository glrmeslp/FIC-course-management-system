import { MatGridListModule } from '@angular/material/grid-list';
import { UsersComponent } from './users.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialAngular } from 'src/app/shared/styles/material-angular.module';

@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    MaterialAngular,
    MatGridListModule
  ]
})
export class UsersModule { }
