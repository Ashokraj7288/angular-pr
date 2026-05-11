import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataBinding } from './data-binding/data-binding';
import { Template } from "./template/template";
import { Product } from './service/product';
import { CommonModule, NgIf } from '@angular/common';
import { DemoComponents } from './demo-components/demo-components';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, DemoComponents, NgIf ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {


  
//   protected readonly title = signal('angularpr');

//  constructor(private productService: Product) {
  
  // }
  
  // counter = 0;
  // updateCounter() {
  //   this.counter++;
  // }




}
