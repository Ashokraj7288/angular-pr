import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {  } from '../models/user.model';
import { Admin } from '../models/admin.model';
import { APIService } from '../service/api-service';

@Component({
  selector: 'app-admin-infor',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,],
  templateUrl: './admin-infor.html',
  styleUrl: './admin-infor.css',
})
export class AdminInfor {
  editId: number | null = null;
   admins: Admin[] = [];
  isModalOpen = false;
  adminForm!: FormGroup;

  
  constructor(private fb: FormBuilder, private api: APIService) { }
  
  ngOnInit(): void {
    this.loaddata();
  }

  openDialog(admin?: Admin, admins?: Admin): void {
    this.isModalOpen = true;

    
    this.adminForm = this.fb.group({
      firstName: [admin?.firstName || '', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)]],
      lastName: [admin?.lastName || '', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)]],
      email: [admin?.email || '', [Validators.required, Validators.email]],
      phone: [admin?.phone || '', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      role: [admin?.role || '', [Validators.required]],
    });
  }


  onSubmit(): void {
    if (this.adminForm.invalid) {
      this.adminForm.markAllAsTouched();
      return;
    }
    
    const admin: Admin = this.adminForm.value;

    if (this.editId) {
      this.updateAdmin(this.editId, admin);
    } else {
            this.api.addAdmin(admin).subscribe({
        next: () => {
          this.loaddata();
      this.closeModal();
        },
        error: (err) => {
     console.error("Add Error:", err);
        }
      });
    }

  }
  
  loaddata() { 
     this.api.getAdmin().subscribe({
      next: (res) => {
        console.log("Api Data:",res); 
         this.admins = res;
      },
      error: (err) => {
        console.error("Load Error:", err);
      }
    });
  }


  onDelete(admin: Admin): void { 
    if (confirm("Are you sure?")) {
      this.api.deleteAdmin(admin.id!).subscribe(() => {
        this.loaddata();
      });
    }
  }

  onEdit(admin: Admin): void {
    this.editId = admin.id!;
    console.log("data===",admin);
    this.openDialog(admin);
  }
  
  closeModal(): void {
    this.isModalOpen = false;
    this.adminForm.reset();
  }
 
 


  updateAdmin(id: number, admin: Admin) {
    this.api.updateAdmin(id, admin).subscribe({
      next: (response) => {
        console.log('Update successful', response);
        this.loaddata();
        this.closeModal();
      },
      error: (error) => {
        console.error('Update failed', error);
      }
    });
  }
  
 



}


