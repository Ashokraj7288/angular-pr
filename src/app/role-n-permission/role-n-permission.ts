import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";
import { APIService } from '../service/api-service';

@Component({
  selector: 'app-role-n-permission',
  imports: [FormsModule, CommonModule, RouterLink],
  standalone: true,
  templateUrl: './role-n-permission.html',
  styleUrl: './role-n-permission.css',
})
export class RoleNPermission implements OnInit{

  constructor(private fb: FormBuilder, private api: APIService) { }


  columns = ['Working', 'Process', 'WorkInProcess', 'NotApprove', 'Approve'];


  ngOnInit(): void {
    this.loaddata();
  }
  
  permissions = [
    { name: 'Ashokraj', selectedPermissions: [] as string[] },
    { name: 'Raj', selectedPermissions: [] as string[] },
    { name: 'Tushar', selectedPermissions: [] as string[] },
    { name: 'pushpa', selectedPermissions: [] as string[] }
  ];

  onSubmit() {
    this.permissions.forEach(item => {
      console.log(item.name, item.selectedPermissions.join(', '));
    });
    this.api.addrole(this.permissions).subscribe({
      next: () => console.log("Saved"),
      error: (err) => console.error(err)
    });
  }
  
  
  
  onCheckboxChange(event: any, item: any, col: string) {

    if (event.target.checked) {
      item.selectedPermissions.push(col);
    } else {
      item.selectedPermissions = item.selectedPermissions.filter(
        (c: string) => c !== col
      );
    }

  } 

  loaddata() {
    this.api.addrole(this.permissions).subscribe((res: any[]) => {

      this.permissions = res.map(item => ({
        name: item.name,
        selectedPermissions: item.permissions || []
      }));

    });
  }
  
  
 
}
