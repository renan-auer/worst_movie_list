import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListComponent } from './movie-list.component';
import { MovieService } from '../services/movie.service';
import { HttpClientModule } from '@angular/common/http';
import { PaginatorComponent } from '../components/paginator/paginator.component';
import { FormsModule } from '@angular/forms';

describe('MovieListComponent', () => {
  let component: MovieListComponent;
  let fixture: ComponentFixture<MovieListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule],
      declarations: [ MovieListComponent, PaginatorComponent ], providers: [ MovieService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('method getMovies should be called', () => {
    spyOn(component, 'getMovies');
    component.ngOnInit()
    expect(component.getMovies).toHaveBeenCalled();
  });

  it('should create table element', () => {
    const fixture = TestBed.createComponent(MovieListComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const elements = compiled.getElementsByTagName('table')
    expect(elements).toHaveSize(1);
  });

});
