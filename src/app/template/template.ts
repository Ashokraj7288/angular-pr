import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { first } from 'rxjs';
import { Product } from '../service/product';

@Component({
  selector: 'app-template',
  imports: [FormsModule, CommonModule],
  templateUrl: './template.html',
  styleUrl: './template.css',
})
export class Template {
  productdata: {
    id: number;
    name: string;
    price: number;
  }[] | undefined;
  constructor(private productService: Product) { }
  userObj = {
    firstName: '',
    lastName: '',
    userName: '',
    city: '',
    state: '',
    zip: '',
  }

  
  onsave() {
    const formValues = this.userObj;
    console.log(this.userObj);
  }

  getproductsdata() {
    this.productdata = this.productService.getproductsdata();
    console.log(this.productdata);
    
  }


}