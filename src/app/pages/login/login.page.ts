import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  message: string = '';
  myForm: FormGroup;
  myNewForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl(''),
      

    });

    this.myNewForm = new FormGroup({
      userType: new FormControl('')
    })
  }

  fieldsWithData(): boolean { return false}
  isWorkingAdmin(): boolean { return false}
  isWorkingEmp(): void {}
  empAdminEvaluation(): void {}

}
