import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  standalone: true,
  template: `<p>{{ message }}</p>`,
  styleUrl: './child.css',
})
export class Child {


  @Input() message: string = 'Default Message';
  
}
