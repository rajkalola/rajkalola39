import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: any;

  constructor(
    private router: Router,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  get userName(): FormControl {
    return this.loginForm.get('userName') as FormControl;
  }

  get password(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

  ngOnInit(): void {
  }

  createForm() {
    this.loginForm = this.fb.group({
      userName: [''],
      password: ['']
    })
  }

  checkValidation() {
    if (this.userName.value === 'admin') {
      this.userName.invalid === false;
    }
    if (this.password.value === 'admin') {
      this.password.invalid === false
    }
  }

  onLogin() {
    if (this.userName.value === 'admin' && this.password.value === 'admin') {
      this.router.navigate(['dashboard']);
    } else {
      alert(`Kindly enter valid username and password!`);
    }
  }
}
