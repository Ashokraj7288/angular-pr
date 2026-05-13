import { CommonModule } from '@angular/common';
import { Component, } from '@angular/core';
import {  FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToasteService } from '../service/toaste-service';
import { Authservice } from '../service/authservice';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule,],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
  
export class Login {
  successMessage: string = '';
  showSuccess: boolean = false;

  loginData = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
  })
 
  constructor(private router: Router, private toaste: ToasteService, private authService: Authservice) { }
  ngOnInit() {
 }

  onLogin() {
    this.authService.login(this.loginData.value).subscribe((res: any) => {

      localStorage.setItem('token', res.token);

      this.router.navigate(['/dashboard']);

    });
  
}

  switchToRegister() {
    this.router.navigate(['/register']);

  }



  
  
}

