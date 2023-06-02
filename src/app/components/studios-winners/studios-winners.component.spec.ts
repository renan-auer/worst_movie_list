import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudiosWinnersComponent } from './studios-winners.component';
import { MovieService } from 'src/app/services/movie.service';
import { HttpClientModule } from '@angular/common/http';

describe('StudiosWinnersComponent', () => {
  let component: StudiosWinnersComponent;
  let fixture: ComponentFixture<StudiosWinnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ StudiosWinnersComponent ], providers: [MovieService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudiosWinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('method getStudioWinners should be called', () => {
    spyOn(component, 'getStudioWinners');
    component.ngOnInit()
    expect(component.getStudioWinners).toHaveBeenCalled();
  });
});
