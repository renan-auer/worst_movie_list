import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Movie } from '../models/movie.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private movieService: MovieService
  ) { }

  yearFilter: number = 2019
  moviesByYear: Movie[] = []

  ngOnInit(): void {
    this.getMoviesByYear()
  }

  getYearsWithMultipleWinners() {
    this.movieService.getYearsWithMultipleWinners().subscribe({
      next: (data) => { console.log(data) },
      error: (e) => { }
    })
  }

  getMoviesByYear() {
    this.movieService.getMoviesByYear(this.yearFilter).subscribe({
      next: (data) => { this.moviesByYear = data },
      error: (e) => { }
    })
  }


}
