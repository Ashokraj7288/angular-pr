import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, Subscription, takeUntil } from 'rxjs';

@Component({
  selector: 'app-unsubscribe',
  imports: [AsyncPipe],
  templateUrl: './unsubscribe.html',
  styleUrl: './unsubscribe.css',
})
export class Unsubscribe implements OnInit, OnDestroy {

  http = inject(HttpClient);

  //way-1 
  subscription!: Subscription;
  // way-2 
  subscriptionList: Subscription[] = [];
  //way-3
  subTakeUntil: Subject<void> = new Subject<void>();

  
  // way-4 using async pipe in
   userList$= new Observable<any[]>();



userList:any[] = [];

  // getUser() {
  //   this.subscription = this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res:any) => {
  //     this.userList = res;
  //   });
  // }

//   getPost() {
//     this.subscription = this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((res:any) => {
//       console.log(res);
//     });

//     this.subscriptionList.push(this.subscription);
    
//  }
  

  getUser() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(res => {
        this.userList = res;
      });
  }

  ngOnInit(): void {
    // this.getPost();
    this.getUser();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.subTakeUntil.next();     
    this.subTakeUntil.complete();
    this.subscriptionList.forEach(sub => sub.unsubscribe());
  }


}
