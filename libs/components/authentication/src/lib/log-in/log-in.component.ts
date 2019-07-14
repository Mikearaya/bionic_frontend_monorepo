import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder
} from '@angular/forms';
import {
  AuthenticationApiService,
  AuthenticationModel
} from '@bionic/apis/common/access-control-api';

@Component({
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LogInComponent implements OnInit {
  logInForm: FormGroup;
  constructor(
    private authentication: AuthenticationApiService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.createForm();
  }

  ngOnInit() {}

  onSubmitted() {
    const userData = this.prepareFormData();
    this.authentication.logIn(userData).subscribe(
      (data: any) => {
        this.router.navigate(['home']);
      },
      error => {
        alert('Invalid username or password');
      }
    );
  }

  createForm(): void {
    this.logInForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get userName(): FormControl {
    return this.logInForm.get('userName') as FormControl;
  }

  get password(): FormControl {
    return this.logInForm.get('password') as FormControl;
  }

  prepareFormData(): AuthenticationModel | null {
    if (this.logInForm.valid) {
      return {
        UserName: this.userName.value,
        Password: this.password.value
      };
    } else {
      return null;
    }
  }
}
