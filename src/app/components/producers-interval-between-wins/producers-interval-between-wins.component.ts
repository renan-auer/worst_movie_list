import { Component, OnInit } from '@angular/core';
import { ProducerWinInterval } from 'src/app/models/producer-win-interval';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'producers-interval-between-wins',
  templateUrl: './producers-interval-between-wins.component.html',
  styleUrls: ['./producers-interval-between-wins.component.css']
})
export class ProducersIntervalBetweenWinsComponent implements OnInit {

  constructor(
    private movieService: MovieService
  ) { }

  minProducerIntervalWin: ProducerWinInterval[] = []
  maxProducerIntervalWin: ProducerWinInterval[] = []

  ngOnInit(): void {
    this.getProducersIntervalWin()
  }


  getProducersIntervalWin() {
    this.movieService.getProducersIntervalWin().subscribe({
      next: (data) => {
        this.minProducerIntervalWin = data.min
        this.maxProducerIntervalWin = data.max
      },
      error: (e) => { alert("Erro ao obter dados. Tente novamente mais tarde.") }
    })
  }


}
