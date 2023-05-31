import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { YearWinnerList } from '../models/year-winner-count.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getYearsWithMultipleWinners() {
    return this.http.get<YearWinnerList>(`${environment.apiUrl}?projection=years-with-mulple-winners`);
  }

}
