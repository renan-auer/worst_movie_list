import { Component, OnInit } from '@angular/core';
import { YearWinnerCount } from 'src/app/models/year-winner-count.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'years-with-multiple-winners',
  templateUrl: './years-with-multiple-winners.component.html',
  styleUrls: ['./years-with-multiple-winners.component.css']
})
export class YearsWithMultipleWinnersComponent implements OnInit {

  constructor(
    private movieService: MovieService
  ) { }

  yearList: YearWinnerCount[] = []

  ngOnInit(): void {
    this.getYears()
  }

  getYears() {
    this.movieService.getYearsWithMultipleWinners().subscribe({
      next: (data) => { this.yearList = data?.years },
      error: (e) => { alert("Erro ao obter dados. Tente novamente mais tarde.") }
    })
  }

}
