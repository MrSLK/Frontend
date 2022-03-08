import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  message: string = '';
  passwordMessage: string = '';
  registerForm: any;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.registerForm = new FormGroup({
      userType: new FormControl(''),
      name: new FormControl(''),
      email: new FormControl(''),
      emp_id: new FormControl(''),
      password: new FormControl(''),
      confirm_password: new FormControl(''),
    })
  }

  fieldsWithData(): boolean { return false}
  isWorkingAdmin(): boolean { return false}
  isWorkingEmp(): void {}
  empAdminEvaluation(): void {}
  passwordMatch(): boolean { return false}
  onSubmit(): void {}

}
