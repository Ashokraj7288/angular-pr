import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../models/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService } from '../service/api-service';

@Component({
  selector: 'app-infor',
  imports: [FormsModule, CommonModule, ReactiveFormsModule,],
  templateUrl: './infor.html',
  styleUrl: './infor.css',
})
export class Infor {
  users: User[] = [];
  
  editIndex: number | null = null;
  editUserForm!: FormGroup;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private api: APIService, private router: Router,) { }

  ngOnInit(): void {
    this.editUserForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
    });

    this.loadUser();
  }
    
  openDialog(user: User, index: number) {
    this.editIndex = index;

    this.editUserForm.patchValue({
      firstName: user.firstName,
      lastName: user.lastName,
      userName: user.userName,
      email: user.email,
      phone: user.phone,
      city: user.city,
      state: user.state,
      zip: user.zip,
    });
  }
  
  onSubmit() {
    if (this.editUserForm.invalid) {
      this.editUserForm.markAllAsTouched();
      return;
    }

    const id = Number(this.route.snapshot.paramMap.get('id'));

    console.log("Updating ID:", id);
   console.log("Form Data:", this.editUserForm.value);

    this.api.updateUser(id, this.editUserForm.value)
     .subscribe({
        next: (res) => {
          console.log("Update Response:", res);
       alert("Updated Successfully");
      this.router.navigate(['/user-info']);
        },
      error: (err) => {
          console.error("Update Error:", err);
        }
      });
  }
  
  
  loadUser() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.api.getUserById(Number(id)).subscribe({
        next: (user) => {
          console.log("Updated User:", user);
          this.editUserForm.patchValue(user);
        },
        error: (err) => {
          console.error("Update failed", err);
        }
      });
    }
  }
  
  



}
