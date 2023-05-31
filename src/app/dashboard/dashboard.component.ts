import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.movieService.getYearsWithMultipleWinners().subscribe({
      next: (data) => { console.log(data) },
      error: (e) => { }
    })
  }


}
