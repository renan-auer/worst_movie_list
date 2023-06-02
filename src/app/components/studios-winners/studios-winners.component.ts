import { Component, OnInit } from '@angular/core';
import { StudioWinner } from 'src/app/models/studios-winner';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'studios-winners',
  templateUrl: './studios-winners.component.html',
  styleUrls: ['./studios-winners.component.css']
})
export class StudiosWinnersComponent implements OnInit {

  top3StudioWinners: StudioWinner[] = []

  constructor(
    private movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.getStudioWinners()
  }

  getStudioWinners() {
    this.movieService.getStudiosWinners().subscribe({
      next: (data) => {
        const studios = data.studios
        studios.sort((a, b) => b.winCount - a.winCount)
        this.top3StudioWinners = studios ? studios.splice(0, 3) : []
      },
      error: (e) => { alert("Erro ao obter dados. Tente novamente mais tarde.") }
    })
  }

}
