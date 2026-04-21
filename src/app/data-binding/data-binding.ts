import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule,CommonModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  courseName: string = 'Angular';
  price: number = 4999;
  device = {
    ip_address: '192.168.1.1',
  }

 
  isOnline = true;

  ports: number[]=[8080,5689,4500,3000];
  studentname: string = "Ashokraj";
  constructor() {
   
  }




  
  messg() {
    this.courseName= `Learn Angular`
  }
}
