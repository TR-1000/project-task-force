import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() createUser = new EventEmitter<any>();

  registrationForm = new FormGroup({
    // email:new FormControl('',
    // [
    //   Validators.required,
    //   Validators.email
    // ]),

    username:new FormControl('',
    [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(25),
      Validators.pattern(/^[a-z0-9]+$/)
    ]),
    password:new FormControl('',
    [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(25),
    ]),

    // passwordConfirm:new FormControl('',
    // [
    //   Validators.required,
    //   Validators.minLength(8),
    //   Validators.maxLength(25),
    //
    // ])
  });


  constructor(private userService:UserService) { }

  ngOnInit(): void { }

  onSubmit() {
    console.log(this.registrationForm.value);
    if (this.registrationForm.valid){
      // this.userService.createUser(this.registrationForm.value).subscribe(response => {
      //   console.log(response);
      // })

      this.createUser.emit(this.registrationForm.value)

    } else {
      alert("invalid form")
    }


  }

}
