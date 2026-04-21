import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl,FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Authservice } from '../service/authservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

  constructor(private fb: FormBuilder, private authService: Authservice, private router: Router ) { }
  registerForm = new FormGroup({
    user_type: new FormControl(null, [Validators.required]),
    username: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    phone: new FormControl(null, [Validators.required, Validators.pattern('^[0-9]{10}$')]),
    password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
  })

onsubmit() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      this.authService.register(this.registerForm.value).subscribe(
        (response) => {
          console.log('Registration successful:', response);
          this.router.navigate(['/login']);
        },
        (error) => {
          console.error('Registration failed:', error);
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
}
