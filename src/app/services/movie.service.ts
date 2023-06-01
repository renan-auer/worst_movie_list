import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { YearWinnerResponse } from '../models/year-winner-count.model';
import { Movie } from '../models/movie.model';
import { MoviesPaginated } from '../models/movies-paginated';
import { StudioWinnerResponse } from '../models/studios-winner';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getYearsWithMultipleWinners() {
    return this.http.get<YearWinnerResponse>(`${environment.apiUrl}?projection=years-with-multiple-winners`);
  }

  getMoviesByYear(year: number) {
    return this.http.get<Movie[]>(`${environment.apiUrl}?winner=true&year=${year}`);
  }

  getStudiosWinners() {
    return this.http.get<StudioWinnerResponse>(`${environment.apiUrl}?projection=studios-with-win-count`);
  }

  getMovies(page: number, size: number, winner?: boolean | null, year?: number | null) {
    let query = `?page=${page}&size=${size}`
    if (year) query += `&year=${year}`
    if (winner === true || winner === false) query += `&winner=${winner}`
    console.log(winner)
    return this.http.get<MoviesPaginated>(`${environment.apiUrl}${query}`);
  }

}
