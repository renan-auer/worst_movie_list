import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'movies-winners-by-year',
  templateUrl: './movies-winners-by-year.component.html',
  styleUrls: ['./movies-winners-by-year.component.css']
})
export class MoviesWinnersByYearComponent implements OnInit {

  constructor( private movieService: MovieService ) { }

  yearFilter: number = 2019
  movies: Movie[] = []

  ngOnInit(): void {
    this.getMoviesByYear()
  }

  getMoviesByYear() {
    this.movieService.getMoviesByYear(this.yearFilter).subscribe({
      next: (data) => { this.movies = data },
      error: (e) => { alert("Erro ao obter dados. Tente novamente mais tarde.") }
    })
  }
}
