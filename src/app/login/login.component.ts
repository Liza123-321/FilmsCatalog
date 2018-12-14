import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from 'src/models/user';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {

  public loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(320), Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(50)])
  })


  constructor(private auth: AuthService, private location: Location, private toastr: ToastrService) { }

  onLogin(): void {
    !this.loginForm.invalid && this.auth.login(new User({ email: this.loginForm.controls.email.value, password: this.loginForm.controls.password.value }))
      .subscribe((data: User) => {
        this.location.back();
        this.toastr.success('Success login!', 'Films Service');
      })
  }

  ngOnInit() {
  }

}
