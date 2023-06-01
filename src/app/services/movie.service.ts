import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { YearWinnerList } from '../models/year-winner-count.model';
import { Movie } from '../models/movie.model';
import { MoviesPaginated } from '../models/movies-paginated';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getYearsWithMultipleWinners() {
    return this.http.get<YearWinnerList>(`${environment.apiUrl}?projection=years-with-multiple-winners`);
  }

  getMoviesByYear(year: number) {
    return this.http.get<Movie[]>(`${environment.apiUrl}?winner=true&year=${year}`);
  }

  getMovies(page: number, size: number, winner?: boolean | null, year?: number | null) {
    let query = `?page=${page}&size=${size}`
    if (year) query += `&year=${year}`
    if (winner === true || winner === false) query += `&winner=${winner}`
    console.log(winner)
    return this.http.get<MoviesPaginated>(`${environment.apiUrl}${query}`);
  }

}
