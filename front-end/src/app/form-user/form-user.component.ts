import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { User } from '../user';
import { USERS } from './../mock-users';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {

  userForm: FormGroup;
  hide = true;
  titleU = "Register" ;
  userId: string = "";
  

  constructor(private formBuilder:FormBuilder,
    private router: Router,
    private route: ActivatedRoute )
    { 
    this.userForm = this.formBuilder.group({
      name: ['',[Validators.required,Validators.maxLength(50)]],
      username: ['',[Validators.required,Validators.maxLength(30)]],
      email: ['', [Validators.required,Validators.maxLength(40),Validators.email]],
      password: ['',[Validators.required,Validators.maxLength(20),Validators.minLength(8)]]
    });
  }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params.id;

    if(this.userId != undefined){
      this.titleU = "Edit User" ;
    }
  }

  registerUser() {
    const user = this.userForm.getRawValue() as User;

    // Logica do ID.
    user.id = 1;
    
    USERS.push(user);

    this.router.navigate(['/users']);

  }

  getErrorMessage() {
    if (this.userForm.get('email')?.errors?.required) {
      return 'You must enter a value';
    }

    return this.userForm.get('email')?.hasError('email') ? 'Not a valid email' : '';
  }

}
