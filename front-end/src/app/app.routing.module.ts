import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormUserComponent } from './form-user/form-user.component'
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'users'},
  {path: 'users', component: UsersComponent },
  {path: 'register-user', component: FormUserComponent },
  {path: 'edit-user/:id', component: FormUserComponent },
  {
    path: 'classes',
    pathMatch: 'full',
    redirectTo: 'classes'
  },
  {
  path: 'classes',
    loadChildren: () => import('./modules/classes/classes.module').then(m => m.ClassesModule)
  }];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
