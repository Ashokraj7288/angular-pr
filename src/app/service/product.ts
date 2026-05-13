import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Product {
  

  constructor() {
    console.log("Service initialized");
    
  }

  getproductsdata() {
    return [
      {id:1, name:'Laptop', price:45000},
      {id:2, name:'Mobile', price:25000},
      {id:3, name:'Tablet', price:15000},
      {id:4, name:'Monitor', price:10000},
    ]
  }
}
