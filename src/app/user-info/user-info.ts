import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../models/user.model';
import { APIService } from '../service/api-service';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-info.html',
  styleUrl: './user-info.css',
})
export class UserInfo implements OnInit {

  users: User[] = [];
  isModalOpen = false;

  userForm!: FormGroup;

  selectedImage: File | null = null;
  imagePreview: string | null = null;

  constructor(private fb: FormBuilder, private api: APIService) {

    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required]
    });

  }

  ngOnInit(): void {
    this.loaddata();
  }

  // OPEN MODAL
  openDialog() {
    this.isModalOpen = true;
    this.userForm.reset();
    this.selectedImage = null;
    this.imagePreview = null;
  }

  // CLOSE MODAL
  closeModal() {
    this.isModalOpen = false;
    this.userForm.reset();
    this.selectedImage = null;
    this.imagePreview = null;
  }


  onSubmit() {

    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }

    this.onAdd();
  }


  onAdd() {

    const formData = new FormData();

    Object.keys(this.userForm.value).forEach(key => {
      formData.append(key, this.userForm.value[key]);
    });

    if (this.selectedImage) {
      formData.append('img', this.selectedImage);
    }

    this.api.adduser(formData).subscribe({
      next: (res) => {

        alert(res.message);

        this.loaddata();
        this.closeModal();

      },
      error: (err) => {
        console.error(err);
      }
    });

  }

  
  loaddata() {

    this.api.getData().subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (err) => {
        console.error("Failed to load data", err);
      }
    });

  }

  
  onEdit(user: any) {

    this.isModalOpen = true;

    this.userForm.patchValue(user);

    if (user.image_path) {
      this.imagePreview = 'http://localhost:3000/' + user.image_path;
    }

  }

  
  onDelete(user: User) {

    if (confirm("Are you sure?")) {

      this.api.deleteUser(user.id!).subscribe(() => {
        this.loaddata();
      });

    }

  }

  
  onFileSelected(event: any) {

    const file = event.target.files[0];

    if (file) {

      this.selectedImage = file;

      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.imagePreview = e.target.result;
      };

      reader.readAsDataURL(file);

    }

  }

  removeImage() {
    this.selectedImage = null;
    this.imagePreview = null;
  }

}
