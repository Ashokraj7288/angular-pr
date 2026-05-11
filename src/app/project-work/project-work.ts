import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-project-work',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './project-work.html',
  styleUrl: './project-work.css',
})
export class ProjectWork {
  
  employeeList: string[] = [
    'Neha',
    'Rohit',
    'Priya',
    'Nilesh',
    'Sujit',

  ];


  empWork = new FormGroup({
    id: new FormControl<number | null>(null, [Validators.required]),

    project_Name: new FormControl<string>('', [Validators.required]),

    emp_Names: new FormControl<string[]>([], [Validators.required]),

    work_Date: new FormControl<string>('', [Validators.required]),

    priority: new FormControl<string>('', [Validators.required]),
  });

  onSubmit() {
    console.log(this.empWork.value);
  }

  onEmployeeSelect(event: any) {
    console.log(event.target.value);
  }

  resetForm() {

    this.empWork.reset();

    this.empWork.patchValue({
      project_Name: '',
      emp_Names: [],
      work_Date: '',
      priority: ''
    });

  }

  
}
