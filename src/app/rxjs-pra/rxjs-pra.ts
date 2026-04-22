import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { filter, from, interval, Observable, of, Subject, timer } from 'rxjs';
import { APIService } from '../service/api-service';
import { Login } from '../login/login';


@Component({
  selector: 'app-rxjs-pra',
  imports: [],
  templateUrl: './rxjs-pra.html',
  styleUrl: './rxjs-pra.css',
})
  
export class RxjsPra   implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // Inject the APIService to use its methods
  // http = inject(APIService);


// // c that emits an array of userMasters
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



//   studentName$ = new Subject<string>();

//  rollNo$ = new Subject<number>();

//   takeTill$ = new Subject<void>();
  
  
  // constructor() { 
  //    setTimeout(() => {
  //      this.studentName$.next('=======rrrr');
  //      this.rollNo$.next(101);
  //       this.takeTill$.next();
  //    }, 4000);
  // }

  // ngOnInit(): void {
    
  //   this.studentName$.subscribe((res: any) => {
  //     debugger;
  //    console.log(res);
  //   });
    
  //   this.rollNo$.subscribe((res: any) => {
  //     debugger;
  //     console.log(res);
  //   });

  //   this.takeTill$.subscribe((res: any) => {
  //     debugger;
  //     console.log(res);
  //   });



  // }

  
  //////////////////// Rxjs Subject Practice ///////////////////////
 
  ////////////////// Rxjs Creation Operators Practice of(), from()    ///////////////////////
  
  // cityList: string[] = ['Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Kolkata'];
  
  // cityList$ = of(['Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Kolkata']);

  // cityList2$ = from(['Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Kolkata']);

  // myInterval$ = interval(1000);

  // timer$ = timer(5000);

  // constructor() {
  
    // =>  timer is a creation operator that emits a single value after a specified delay. 
    //     In this case, it will emit a value after 5000 milliseconds(5 seconds). 
    //     The emitted value will be the number of milliseconds that have passed since the timer was started, which in this case will be 0.
    
//     this.timer$.subscribe(res => {
//      console.log("timer: " + res);
     
// })

     // => interval is a creation operator that emits sequential numbers every specified interval of time.
     
    // this.myInterval$.subscribe((res: number) => {
    //   console.log('myInterval: ' +res);
    // });

      // => of is a creation operator that emits the values you provide as arguments.

    //   this.cityList$.subscribe((res: any) => {
    //     console.log(res);
    //   });

    // const myObs$ = new Observable(value => {
    //   value.next(" this is observables");
    //   value.complete();
    // });

    // myObs$.subscribe(message => {
    //   console.log(message);
    //  })

    
/////////





















































    
  }
  

  












































































































  








