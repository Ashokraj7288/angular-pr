import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { filter, from, Observable, of, Subject } from 'rxjs';
import { APIService } from '../service/api-service';


@Component({
  selector: 'app-rxjs-pra',
  imports: [],
  templateUrl: './rxjs-pra.html',
  styleUrl: './rxjs-pra.css',
})
export class RxjsPra   implements OnInit {

  // Inject the APIService to use its methods
  // http = inject(APIService);


// // Observable that emits an array of userMasters
//   userMaster$ = of([
//     { id: 1, name: 'Viratttttttt' },
//     { id: 2, name: 'Rohit Bhai' },
//     { id: 3, name: 'Thala' }
//   ]);

//   // Observable One By One
//   userMasterOne = from([
//     { id: 1, name: 'Viratttttttt' },
//     { id: 2, name: 'Rohit Bhai' },
//     { id: 3, name: 'Thala' }
//   ]);


//   nolist$ = from([11,22,55,99,65,25,24,])

  // constructor() {

    // this.http.getJsonUsers().subscribe((res: any) => {
    //   console.log(res);
    // })

    // // Subscribe to the userMaster$ Observable to get the array of userMasters
    // this.userMaster$.subscribe((userNames) => {
      
    //   console.log('User Names:', userNames);
    // })

    // Subscribe to the userMasterOne Observable to get each userMaster one by one we use form
    // this.userMasterOne.subscribe((userMasterOne) => {
    //   console.log(this.userMasterOne);
    // })

    // const myObs$ = new Observable((observer) => {
    //   observer.next("Hello from Observable!");
    //   observer.complete();
    // });

    // myObs$.subscribe({ 
    //   next: (message) => {
    //     console.log(message);
    //   },
    //   complete: () => {
    //     console.log("Done");
    //   }
    // });

// Filter the num
  //   this.nolist$.pipe(
  //     filter(num => num > 30)
  //   ).subscribe((filteredNum) => {
  //     console.log('Filtered Numbers:', filteredNum);
  //   });
  // }



  studentName$ = new Subject<string>();

 rollNo$ = new Subject<number>();

  takeTill$ = new Subject<void>();
  
  
  constructor() { 
     setTimeout(() => {
       this.studentName$.next('=======rrrr');
       this.rollNo$.next(101);
        this.takeTill$.next();
     }, 4000);
  }
  ngOnInit(): void {
    this.studentName$.subscribe((res: any) => {
      debugger;
     console.log(res);
    });
    
    this.rollNo$.subscribe((res: any) => {
      debugger;
      console.log(res);
    });

    this.takeTill$.subscribe((res: any) => {
      debugger;
      console.log(res);
    });
  }
  

}







