import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-network',
  imports: [ FormsModule,CommonModule],
  templateUrl: './network.html',
  styleUrl: './network.css',
})
export class Network {

  constructor(private router: Router){}

  columns = ['Working', 'Process', 'Work In Process', 'Not Approve', 'Approve'];

  permissions: any[] = [
    { name: 'Shravani', selectedPermissions: [] as string[] },
    { name: 'Raju', selectedPermissions: [] as string[] },
    { name: 'Test', selectedPermissions: [] as string[] },
    { name: 'Rajpushpa', selectedPermissions: [] as string[] }
  ];

  goToNetwork() {
    this.router.navigate(['rolepermission']);
  }

  onSubmit() {
    this.permissions.forEach(item => {
      console.log(item.name, item.selectedPermissions.join(', '));
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


}
