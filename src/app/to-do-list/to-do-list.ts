import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { APIService } from '../service/api-service';



@Component({
  selector: 'app-to-do-list',
  imports: [FormsModule,CommonModule],
  templateUrl: './to-do-list.html',
  styleUrl: './to-do-list.css',
})
  

export class ToDoList {
  taskTitle = '';
  taskDate = '';

  tasks: any[] = [];

  constructor(private fb: FormBuilder, private api: APIService) { }

  ngOnInit(): void {
    this.loaddata();
    
  }

  addTask() {
    if (!this.taskTitle || !this.taskDate) {
      alert("Please fill all fields");
      return;
    }

    const newTask = {
      title: this.taskTitle,
      due_date: this.taskDate,
      
    };

    this.api.addtdlist(newTask).subscribe({
      next: (res) => {
        console.log("Saved:", res);

        
        this.loaddata();

        this.taskTitle = '';
        this.taskDate = '';
      },
      error: (err) => {
        console.error("Add Error:", err);
      }
    });
  }
  
  deleteTask(id: number) {
    this.api.deletelist(id).subscribe({
      next: () => {
        this.loaddata(); 
      },
      error: (err) => console.error(err)
    });
  }
  
  toggleComplete(task: any) {
    task.completed = !task.completed;
  
  }

  loaddata() {
    this.api.gettdlist().subscribe({
      next: (res) => {
        console.log("Api Data:", res);
        this.tasks = res;
      },
      error: (err) => {
        console.error("Load Error:", err);
      }
    });
}

}

