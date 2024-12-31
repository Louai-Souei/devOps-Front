import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Transfer} from '../../entity/Transfer';

@Injectable({
  providedIn: 'root'
})
export class TransferService {
  private apiUrl = 'http://localhost:8081/api/transfers';

  constructor(private http: HttpClient) {
  }

  addTransfer(transfer: Transfer): Observable<Transfer> {
    return this.http.post<any>(`${this.apiUrl}/new-transfer`, transfer);
  }

  getTransfers(): Observable<Transfer[]> {
    return this.http.get<Transfer[]>(`${this.apiUrl}/get-all`);
  }

  getTransferById(id: number): Observable<Transfer> {
    return this.http.get<Transfer>(`${this.apiUrl}/get/${id}`);
  }

  updateTransfer(id: number, transfer: any): Observable<Transfer> {
    return this.http.put<Transfer>(`${this.apiUrl}/update/${id}`, transfer);
  }

  deleteTransfer(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }


}
