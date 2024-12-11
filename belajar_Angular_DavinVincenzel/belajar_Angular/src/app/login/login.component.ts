import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router,RouterModule } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { User } from '../user';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  formError: String = "";
loginForm: FormGroup;
router: Router = inject(Router);
authService: AuthenticationService = inject (AuthenticationService);
//Inject class Router dan service authentication  

constructor(private fb: FormBuilder){
  this.loginForm = this.fb.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });
}

get email() {
  return this.loginForm.get('email');
}

get password() {
  return this.loginForm.get('password');
}

public onLoginSubmit(): void{
  if (this.loginForm.valid) {
    const formData = this.loginForm.value;
    console.log('Form submitted', formData);
    const user = { ...this.loginForm.value } as User;
    this.authService.loginAuth(user)
      .then((res) => {
        if (res.message != null) {
          this.formError = res.message;
        } else if (res.token != null) {
          this.authService.saveToken(res.token);
          this.router.navigate(['/']);
        } else {
          this.formError = 'Login failed, please try again';
        }
      });

  }else{
      this.formError = 'All fields are required, please try again';
  }
}
}
