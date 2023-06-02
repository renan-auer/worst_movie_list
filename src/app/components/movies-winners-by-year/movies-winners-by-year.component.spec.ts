import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesWinnersByYearComponent } from './movies-winners-by-year.component';
import { MovieService } from 'src/app/services/movie.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

describe('MoviesWinnersByYearComponent', () => {
  let component: MoviesWinnersByYearComponent;
  let fixture: ComponentFixture<MoviesWinnersByYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule],
      declarations: [MoviesWinnersByYearComponent], providers: [MovieService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MoviesWinnersByYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('method getMoviesByYear should be called', () => {
    spyOn(component, 'getMoviesByYear');
    component.ngOnInit()
    expect(component.getMoviesByYear).toHaveBeenCalled();
  });
});
