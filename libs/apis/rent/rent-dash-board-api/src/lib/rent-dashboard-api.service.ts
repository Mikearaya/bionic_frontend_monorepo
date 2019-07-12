import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RentDashBoardModel } from './models/rent-dash-board.model';

@Injectable()
export class RentDashBoardApiService {
  private apiUrl = `http://localhost:5000/api`;

  constructor(private httpClient: HttpClient) {}
  private httpBody: URLSearchParams;

  getDashBoardData(): Observable<RentDashBoardModel> {
    return this.httpClient.get<RentDashBoardModel>(this.apiUrl);
  }
}
