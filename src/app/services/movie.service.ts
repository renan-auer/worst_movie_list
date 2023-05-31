import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { YearWinnerList } from '../models/year-winner-count.model';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getYearsWithMultipleWinners() {
    return this.http.get<YearWinnerList>(`${environment.apiUrl}?projection=years-with-mulple-winners`);
  }

  getMoviesByYear(year: number) {
    return this.http.get<Movie[]>(`${environment.apiUrl}?winner=true&year=${year}`);
  }


}
