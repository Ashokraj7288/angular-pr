import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-suject-behav',
  imports: [],
  templateUrl: './suject-behav.html',
  styleUrl: './suject-behav.css',
})
  
  
export class SujectBehav implements OnInit {

  studentName$ = new Subject();

  rollno$ = new Subject<number>();

  takeTill = new Subject<void>();
 
  userSrv = {
    $courseDuration: new Subject<string>()
  };
 
  constructor() {
  
    setTimeout(() => {

      this.studentName$.next("Angular Rxjs");
      console.log(this.studentName$);
      this.rollno$.next(101); 
      console.log(this.rollno$);
      
      this.takeTill.next();
      
      this.userSrv.$courseDuration.next("3 months + 1 weak");

    }, 2000);


   

 }
  ngOnInit(): void {
    
    this.studentName$.subscribe(res => {
      console.log("Received:", res);
    });


    this.rollno$.subscribe(res => {
      console.log("Received roll number:", res);
    });


    this.takeTill.subscribe(() => {
      console.log("Take till event received");
    });


    this.userSrv.$courseDuration.subscribe(res => {
      console.log("Course Duration:", res);
    });
  

    








  }












}
