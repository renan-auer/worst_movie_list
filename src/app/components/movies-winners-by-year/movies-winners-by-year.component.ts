import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'movies-winners-by-year',
  templateUrl: './movies-winners-by-year.component.html',
  styleUrls: ['./movies-winners-by-year.component.css']
})
export class MoviesWinnersByYearComponent implements OnInit {

  constructor() { }

  @Input() movies: Movie[] = []

  ngOnInit(): void {
  }

}
