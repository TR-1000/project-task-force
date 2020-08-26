import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  //user list
  users:User[];

  //initialize services
  constructor(private userService:UserService) { }

  //get users when this component loads
  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  createUser(user:User) {
    console.log("user component");

    this.userService.createUser(user).subscribe(user => {
      this.users.push(user);
      console.log(this.users);
    });
  }



}
