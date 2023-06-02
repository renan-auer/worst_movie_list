import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearsWithMultipleWinnersComponent } from './years-with-multiple-winners.component';
import { MovieService } from 'src/app/services/movie.service';
import { HttpClientModule } from '@angular/common/http';

describe('YearsWithMultipleWinnersComponent', () => {
  let component: YearsWithMultipleWinnersComponent;
  let fixture: ComponentFixture<YearsWithMultipleWinnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ YearsWithMultipleWinnersComponent ], providers: [MovieService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YearsWithMultipleWinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('method getYears should be called', () => {
    spyOn(component, 'getYears');
    component.ngOnInit()
    expect(component.getYears).toHaveBeenCalled();
  });
});
