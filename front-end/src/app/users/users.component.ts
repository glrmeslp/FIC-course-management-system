import { USERS } from './../mock-users';
import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  addUserButtonText = '';
  public isMobile = false;
  displayedColumns: string[] = ['ID', 'Name', 'Username', 'Email', 'Actions'];
  users = USERS

  constructor(
    private breakpointObserver: BreakpointObserver,
  ) { }

  ngOnInit(): void {
    this.breakpointObserver.observe([
      '(min-width: 600px)'
    ]).subscribe(result => {
      this.isMobile = result.matches;
      if (!this.isMobile) {
        this.addUserButtonText = '';
      } else {
        // tslint:disable-next-line: quotemark
        this.addUserButtonText = "Register user";
      }
    });
  }

}
