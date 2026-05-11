import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdditionChr {
  private apiUrl = 'http://localhost:3000/api/addition-Chr';

  constructor(private http: HttpClient) { }

  // GET ALL
  getAdditionCharges(): Observable<any> { return this.http.get<any>(
    `${this.apiUrl}/getAll`
    );
  }

  // CREATE
  addAdditionCharge(data: any): Observable<any> { return this.http.post<any>(
      `${this.apiUrl}/create`,
      data
    );
  }

  // UPDATE
  updateAdditionCharge(id: number,charge: any): Observable<any> {return this.http.put<any>(
      `${this.apiUrl}/update/${id}`,
      charge
    );
  }

  //  DELETE
  deleteAdditionCharge(id: number): Observable<any> { return this.http.delete<any>(
      `${this.apiUrl}/delete/${id}`
    );
  }

}
