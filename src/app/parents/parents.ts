import { Component } from '@angular/core';
import { Child } from '../child/child';

@Component({
  selector: 'app-parents',
  imports: [Child],
  templateUrl: './parents.html',
  styleUrl: './parents.css',
})
export class Parents {

  childMessage: string = '';

  receiveMessage(message: string) {
    this.childMessage = message;
  }

  

}
