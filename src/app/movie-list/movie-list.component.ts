import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Movie } from '../models/movie.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  movies: Movie[] = []

  page: number = 0
  size: number = 15
  totalPages: number = 1

  yearFilter: number | null = null
  winnerFilter: string | null = null

  ngOnInit(): void {
    this.getMovies()
  }

  getMovies() {
    const winnerFilter = this.winnerFilter === 'true' ? true : this.winnerFilter === 'false' ? false : null
    this.movieService.getMovies(this.page, this.size, winnerFilter, this.yearFilter).subscribe({
      next: (data) => { 
        this.movies = data?.content 
        this.totalPages = data.totalPages
      },
      error: (e) => { }
    })
  }

  winnerChanged() {
    this.page = 0
    this.getMovies()
  }

  yearChanged() {
    this.page = 0
    this.getMovies()
  }

  pageSelected(page: number) {
    this.page = page
    this.getMovies()
  }

}
